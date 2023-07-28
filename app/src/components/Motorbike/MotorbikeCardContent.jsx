import AddToCart from "../cart/AddToCart";
import "./MotorbikeCardContent.css";
// eslint-disable-next-line react/prop-types
function MotorbikeCardContent({ id, label, description, brand, price }) {
  return (
    <div className="cardContent">
      <p>{label}</p>
      <p>{description}</p>
      <p>{brand}</p>
      <div style={{ textAlign: "center", padding: "12px" }}>
        Price : {price}
        <span>
          <AddToCart id={id} />
        </span>
      </div>
    </div>
  );
}

export default MotorbikeCardContent;
