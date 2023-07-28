import './CartItem.css'
import AddToCart from './AddToCart'


// eslint-disable-next-line react/prop-types
function CartItem({id,order,quantity,label,price,totalLine}) {
    console.log(quantity)

  return (
    <tr className='cartLine'>
        <td  className='cartCell'>{order+1}</td>
        <td className='cartCell'>{label}</td>
        <td className='cartCell'>{Number(price)?.toFixed(3)}</td>
        <td><AddToCart id={id} /> </td>
        <td> {totalLine} </td>
    </tr>
  )
}

export default CartItem