import './OrderDetail.css'


// eslint-disable-next-line react/prop-types
function OrderDetail({detail}) {


    
  return (
    <div className='my-orders-detail'>
    <table className='my-orders-detail__table'>
        <thead className='my-orders-detail__head'>
            <tr>
            <th>Motorbike</th>
            <th>Price</th>
            <th>Qte</th>
            </tr>
        </thead>
        <tbody className=''>
        {
            // eslint-disable-next-line react/prop-types
            detail?.map((line,index)=>{
                return(<tr key={index}>
                    <td>{line?.motorbike?.label}</td>
                    <td>{line?.motorbike?.price?.toFixed(3)}</td>
                    <td>{line?.qte}</td>
                </tr>)
            })
        }

        </tbody>
    </table>
    </div>
  )
}

export default OrderDetail