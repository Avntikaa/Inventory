import React from 'react'
import {useStateContext} from '../store/StateContext'
import './EachMedicine.css'
const EachMedicine = (props) => {
    const cxt=useStateContext();

     function addCart(count,item){
        console.log(count);
        props.item.quantity=count-1;

        if(props.item.quantity===0)
{props.item.quantity='OUT OF STOCK';
cxt.setDisable(()=>!cxt.disable);
  }
    let flag=false;
    console.log(cxt.cartitem)
    if(cxt.cartitem.length>0){
    cxt.cartitem.forEach((i)=>{
        console.log(i.title);
                console.log(item.title);

      if(i.title===item.title)
      flag=true;
    })
    
      if(flag===false)
      {
  cxt.setCartitem((prev)=>[...prev,item])
      }
      }
    else{
  cxt.setCartitem((prev)=>[...prev,item])
       }
    cxt.setTotalprice((prev)=>prev+parseInt(item.price));
          cxt.setUpdate(()=>cxt.update+1);
}

  return (
    
 <div className='eachmeal'>
    
      <span> 
         <span>{props.item.title}-</span>
        <span>{props.item.desc}-</span>
        <span>${props.item.price} -</span>
    <span>{props.item.quantity}</span>
        </span>  
         {cxt.disable &&
          <button className='addbtn' onClick={()=>addCart(props.item.quantity,props.item)}>
          <span>Add</span>
          </button>} 
    </div>  
    )
    
    }
export default EachMedicine