export default function Card({ name, image, onClick }) {
  return (
    <div onClick={onClick} className="card">
      <img src={image} alt={name} className="card-image" />
      <p className="card-name">{name}</p>
    </div>
  )
}
