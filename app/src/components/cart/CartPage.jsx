import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import api from "../../api/common.http";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import "./CartPage.css";

function CartPage() {
  const { items } = useCart();
  const [motorbikes, setMotorbikes] = useState([]);

  function getMotorbikeData(id) {
    return motorbikes.find((product) => product._id === id);
  }

  async function getMotorbikes() {
    await api
      .get(`/motor/all`)
      .then((response) => response.data)
      .then((data) => {
        setMotorbikes(data.data);
      })
      .catch((error) => console.error(error.message));
  }

  useEffect(() => {
    getMotorbikes();
  }, []);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <table className="motorbikeTable">
        <thead>
          <tr className="cartHead__row">
            <th className="cartHead__cell">#</th>
            <th className="cartHead__cell">Label</th>
            <th className="cartHead__cell">Price</th>
            <th className="cartHead__cell">Quantity</th>
            <th className="cartHead__cell">Total</th>
          </tr>
        </thead>
        <tbody className="motorbikeTable_body">
          {items.map((item, index) => (
            <CartItem
              key={item.id}
              order={index}
              id={item.id}
              quantity={item.quantity}
              label={getMotorbikeData(item.id)?.label}
              price={getMotorbikeData(item.id)?.price}
              totalLine={
                (item.quantity * getMotorbikeData(item.id)?.price).toFixed(3) ||
                ""
              }
            />
          ))}
        </tbody>
        </table>
        <div className="cart_foot">
              <span>
                Total :
              </span>
              <span>{(items.reduce((sum, item) => sum + item.quantity * getMotorbikeData(item.id)?.price, 0)).toFixed(3)}
              </span>
        </div>

      <Button variant="outlined" style={{ width: "100%" }}>Order</Button>
    </div>
  );
}

export default CartPage;
