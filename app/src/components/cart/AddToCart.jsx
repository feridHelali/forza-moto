import { Button, Typography } from "@mui/material";
import "./AddToCart.css";
import { useCart } from "../../hooks/useCart";

// eslint-disable-next-line react/prop-types
function AddToCart({ id }) {
  const { getProductQuantity, addOneToCart, removeOneFromCart } = useCart();
  return (
    <div className="addToCart">
      {getProductQuantity(id) === 0 ? (
        <Button
          variant="outlined"
          onClick={() => {
            addOneToCart(id);
          }}
        >
          Add To Cart
        </Button>
      ) : (
        <>
          <Button
            variant="outlined"
            onClick={() => {
              addOneToCart(id);
            }}
          >
            +
          </Button>
          <Typography variant="h4" m={2}>
            {getProductQuantity(id)}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              removeOneFromCart(id);
            }}
          >
            -
          </Button>
        </>
      )}
    </div>
  );
}

export default AddToCart;
