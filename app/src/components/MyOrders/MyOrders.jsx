import { useEffect, useState } from "react"
import api from '../../api/common.http'
import OrderDetail from "./OrderDetail"
import {Typography} from '@mui/material'
import './MyOrders.css'

function MyOrders() {
   const [orders,setOrders]=useState()

   useEffect(()=>{
    api.get('/order/my-orders')
    .then(response=>response.data?.data)
    .then(data => setOrders(data))
    .catch(error => alert(JSON.stringify(error.message)))
   },[])

  return (
    <div className="my-orders">
    <Typography variant="h4" m={2}>Your Orders</Typography>
    <table className="my-orders__table">
      <thead className="my-orders__head">
        <tr>
          <th>#</th>
          <th>Order Date</th>
          <th>Items</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
    <tbody>
        {orders?.length === 0 ? <tr><td>No orders Found</td></tr> :
          (
            orders?.map((order, index) => (
              <tr className="my-order__line" key={order._id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                <td className="px-6 py-4">{order.orderDate}</td>
                <td className="px-6 py-4"><OrderDetail detail={order.detail}/></td>
                <td className="px-6 py-4">{order.detail?.reduce((sum,line)=>sum+(line?.qte*line?.motorbike.price),0).toFixed(3)}</td>
                <td className="px-6 py-4">{order.status}</td>
              </tr>)
            )
          )}
            </tbody> 
    </table>


  </div>
  )
}

export default MyOrders