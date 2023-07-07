import './MotorbikeCardContent.css'
// eslint-disable-next-line react/prop-types
function MotorbikeCardContent({label,description,brand,price}) {
  return (
    <div className="cardContent">
        <p>{label}</p>
        <p>{description}</p>
        <p>{brand}</p>
        <h2>Price : {price}</h2>
    </div>
  )
}

export default MotorbikeCardContent