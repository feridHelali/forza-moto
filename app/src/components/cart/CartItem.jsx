import './CartItem.css'
import AddToCart from './AddTocart'


// eslint-disable-next-line react/prop-types
function CartItem({id,order,quantity,label,price,totalLine}) {
    console.log(quantity)

  return (
    <tr>
        <td>{order+1}</td>
        <td>{label}</td>
        <td>{Number(price)?.toFixed(3)}</td>
        <td><AddToCart id={id} /> </td>
        <td> {totalLine} </td>
    </tr>
  )
}

export default CartItem