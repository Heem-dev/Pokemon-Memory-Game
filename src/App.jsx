import CardsGrid from "./componenets/cardsGrid"
import { useState, useEffect } from "react"

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(() => {
    const stored = localStorage.getItem("bestScore")
    return stored ? parseInt(stored) : 0
  })
  const [clickedCards, setClickedCards] = useState([])
  const [pokemonData, setPokemonData] = useState([]) // Store the fetched Pokemon data
  const [shuffledData, setShuffledData] = useState([])

  // Save bestScore to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bestScore", bestScore)
  }, [bestScore])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then((response) => response.json())
      .then((data) => {
        const pokemonWithImages = data.results.map((poke, idx) => ({
          id: idx + 1,
          name: poke.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            idx + 1
          }.png`,
        }))
        setPokemonData(pokemonWithImages)
        setShuffledData(shuffleArray(pokemonWithImages)) // Shuffle the data initially
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error)
      })
  }, [])

  // Shuffle helper
  function shuffleArray(array) {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  // Card click handler
  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setScore(0)
      setClickedCards([])
    } else {
      const newScore = score + 1
      setScore(newScore)
      setClickedCards([...clickedCards, id])
      if (newScore > bestScore) {
        setBestScore(newScore)
      }
    }
    setShuffledData(shuffleArray(shuffledData))
  }

  // Shuffle the data when the component mounts
  useEffect(() => {
    if (pokemonData.length > 0) {
      setShuffledData(shuffleArray(pokemonData))
    }
  }, [pokemonData])

  const responsiveTextSizes =
    " text-[0.6rem] sm:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.4rem] "
  return (
    <>
      <div className={`mainContainer flex flex-col  ${responsiveTextSizes} `}>
        <div className="titleContainer bg-background p-2 pb-3 w-[100%] text-center h-fit">
          <p className=" text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Pokemon Memory Card Game
          </p>
        </div>
        <div className="infoContainer bg-background pr-[10%] pl-[10%] pb-4">
          <div className="gameDescription">
            <div className="descriptionText text-center">
              Try to click all images only once!
            </div>
          </div>
          <div className="scoresContainer mt-2 mb-2 flex flex-row justify-around">
            <div className="currentScore text-primary">
              Current Score: {score}
            </div>
            <div className="bestScore">Best Score: {bestScore}</div>
          </div>
        </div>
        <div className="gameContainerBG flex flex-col items-center justify-center">
          <div className="gameContainer grid-cols-3 md:grid-cols-4 ">
            <CardsGrid
              shuffledData={shuffledData}
              onCardClick={handleCardClick}
            ></CardsGrid>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
