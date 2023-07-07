import MotorbikeCardContent from "./MotorbikeCardContent"
import MotorbikeCardCover from "./MotorbikeCardCover"
import './MotorbikeCard.css'

// eslint-disable-next-line react/prop-types
function MotorbikeCard({coverUrl,label,description,brand,price}) {
  return (
    <div className="motorbikeCard">
      <MotorbikeCardCover coverUrl={coverUrl}/>
      <MotorbikeCardContent
          label={label}
          description={description}
          brand={brand}
          price={price}
          />
    </div>
  )
}

export default MotorbikeCard