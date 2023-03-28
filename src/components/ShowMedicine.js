import React from 'react'
import {useStateContext} from '../store/StateContext'
import EachMedicine from './EachMedicine';
import './ShowMedicine.css'
const ShowMedicine = () => {
        const cxt=useStateContext();

  return (
    <div className='medilist'>
{
    cxt.list.map((i)=>{
       return <EachMedicine item={i}/>
    })
}
    </div>
  )
}

export default ShowMedicine