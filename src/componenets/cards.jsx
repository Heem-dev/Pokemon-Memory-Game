export default function Card({ name, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <p className="card-name">{name}</p>
    </div>
  )
}
