import React, { useContext, useState, createContext} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
   const [title,setTitle]=useState('');
    const [price,setPrice]=useState(0);
  const[desc,setDesc]=useState('');
  const[quantity,setQuantity]=useState();
  const[list,setList]=useState([]);
  const[update,setUpdate]=useState(0);
  const[disable,setDisable]=useState(true);
  const[cartitem,setCartitem]=useState([]);
const[totalprice,setTotalprice]=useState(0);

  const [openmodal,setOpenmodal]=useState(false);
  const openModal=()=>{
    setOpenmodal(()=>!openmodal);
  }
  const onSubmitFormDeatils=(e)=>{
    e.preventDefault();
            console.log('kfnkj');

        const newmedicine={
            title:title,
            price:price,
            desc:desc,
            quantity:quantity
        }
        setList((prev)=>[...prev,newmedicine]);
    }
    const decreaseQuantity=(count)=>{
        count=count-1;
    }
  return (
    <Context.Provider
      value={{
        title,setTitle,price,setPrice,desc,setDesc,quantity,setQuantity,onSubmitFormDeatils,list,decreaseQuantity,setUpdate,update,disable,setDisable
        ,openModal,openmodal,setOpenmodal,setCartitem,cartitem,totalprice,setTotalprice
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);