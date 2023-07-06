import MotorbikeCardContent from "./MotorbikeCardContent"
import MotorbikeCardCover from "./MotorbikeCardCover"
import './MotorbikeCard.css'

// eslint-disable-next-line react/prop-types
function MotorbikeCard({coverUrl,label,description,brand,price}) {
  return (
    <div style={{width:'450px'}}>
      <MotorbikeCardCover coverUrl={coverUrl}/>
      <MotorbikeCardContent className="content"
          label={label}
          description={description}
          brand={brand}
          price={price}
          />
    </div>
  )
}

export default MotorbikeCard