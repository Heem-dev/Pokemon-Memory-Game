import Card from "./cards"

export default function CardsGrid({ shuffledData, onCardClick }) {
  return (
    <>
      {shuffledData.map((card) => {
        return (
          <Card
            key={card.id}
            name={card.name}
            image={card.image}
            onClick={() => onCardClick(card.id)}
          />
        )
      })}
    </>
  )
}
