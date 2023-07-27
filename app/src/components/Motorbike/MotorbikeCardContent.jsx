import AddToCart from "../cart/AddTocart";
import "./MotorbikeCardContent.css";
// eslint-disable-next-line react/prop-types
function MotorbikeCardContent({ id,label, description, brand, price }) {
  return (
    <div className="cardContent">
      <p>{label}</p>
      <p>{description}</p>
      <p>{brand}</p>
      <h2 style={{textAlign:'center',padding:'12px'}}>
        Price : {price}
        <AddToCart id={id}/>
      </h2>
    </div>
  );
}

export default MotorbikeCardContent;
