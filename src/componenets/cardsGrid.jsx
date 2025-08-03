import Card from "./cards"

export default function CardsGrid({ pokemonData }) {
  return (
    <>
      {pokemonData.map((card) => {
        // Extract ID from URL
        const pokeID = card.url.match(/\/(\d+)\//)[1]

        const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`
        return <Card key={pokeID} name={card.name} image={imgLink} />
      })}
    </>
  )
}
