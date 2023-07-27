import './MotorbikeCardCover.css'
import getPhotoUrl from '../../utilities/getPhotoUrl'
// eslint-disable-next-line react/prop-types
function MotorbikeCardCover({coverUrl}) {
  return (
    <div className='cardCover'>
        <img style={{width:'350px'}} src={getPhotoUrl(coverUrl)} alt="motorbike" />
    </div>
  )
}

export default MotorbikeCardCover