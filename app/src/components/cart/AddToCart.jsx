import { Button } from "@mui/material";
import "./AddToCart.css";
import { useCart } from "../../hooks/useCart";

// eslint-disable-next-line react/prop-types
function AddToCart({ id }) {
  const { getProductQuantity, addOneToCart, removeOneFromCart } = useCart();
  return (
    <div className="container">
      {getProductQuantity(id) === 0 ? (
        <Button variant="outlined" onClick={() => {addOneToCart(id)}}>
          Add To Cart
        </Button>
      ) : (
        <>
          <Button variant="outlined" onClick={() => {addOneToCart(id)}}>
            +
          </Button>
          {getProductQuantity(id)}
          <Button variant="outlined" onClick={() => {removeOneFromCart(id)}}>-</Button>
        </>
      )}
    </div>
  );
}

export default AddToCart;
