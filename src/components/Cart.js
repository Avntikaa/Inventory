import React from 'react'
import {useStateContext} from '../store/StateContext'
import OrderModal from './OrderModal';
const Cart = () => {
           const cxt=useStateContext();

  return (
    <div>
        <button onClick={cxt.openModal}>Cart</button>
         {cxt.openmodal && <OrderModal/>}
    </div>
  )
}

export default Cart