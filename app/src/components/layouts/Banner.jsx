import './Banner.css'
import motorbike from '../../assets/motorbike.png'

function Banner() {
    return (
        <div className="banner">
          <div className='title'>Forza Space</div>
          <img src={motorbike} alt="motorbike" />
        </div>
    )
}

export default Banner