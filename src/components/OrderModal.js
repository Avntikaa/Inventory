import React from 'react'
import {useStateContext} from '../store/StateContext'

const OrderModal = () => {
            const cxt=useStateContext();

  return (
    <div>
{
cxt.cartitem.map((i)=>{
return (
    <>
    <span> 
         <h3>{i.title}</h3>
        <h4>${i.price}</h4>
     </span>  
      <span className='totalprice'>
                <h2>Total Amount</h2>
        <h4>$ {cxt.totalprice}</h4>
        </span>
        </>
)

})
}
    </div>
  )
}

export default OrderModal