import CardsGrid from "./componenets/cardsGrid"
import { useState, useEffect } from "react"

function App() {
  const [pokemonData, setPokemonData] = useState([])
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then((response) => response.json())
      .then((data) => {
        console.log("Pokemon data fetched:", data.results)
        console.log("App.jsx Pokemon data type:", typeof data.results)

        setPokemonData(data.results)
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error)
      })
  }, [])

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
            <div className="currentScore text-primary">Current Score: 2</div>
            <div className="bestScore">Best Score: 12</div>
          </div>
        </div>
        <div className="gameContainerBG flex flex-col items-center justify-center">
          <div className="gameContainer grid-cols-3 md:grid-cols-4 ">
            <CardsGrid pokemonData={pokemonData}></CardsGrid>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
