
// eslint-disable-next-line react/prop-types
function MotorbikeCardContent({label,description,brand,price}) {
  return (
    <div>
        <h3>{label}</h3>
        <h4>{description}</h4>
        <h3>Brand <span>{brand}</span></h3>
        <h2>Price : {price}</h2>
    </div>
  )
}

export default MotorbikeCardContent