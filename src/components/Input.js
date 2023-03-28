import React from 'react'

import {useStateContext} from '../store/StateContext'

const Input = () => {
    const cxt=useStateContext();
     const addtitle=(e)=>{
        cxt.setTitle(e.target.value);
    }
    const addPrice=(e)=>{
        cxt.setPrice(e.target.value);
    }
     const addDesc=(e)=>{
        cxt.setDesc(e.target.value);
    }

    const addQuantity=(e)=>{
        cxt.setQuantity(e.target.value);
    }


  return (
    <div className="form-style-6" id='formdiv'>
<form>
<input type="text"  onChange={addtitle} placeholder="Enter Medicine" />
<input type="text" onChange={addDesc} placeholder="Enter Description" />
<input type="number"  onChange={addPrice} placeholder="Enter Price" />
<input type="number"  onChange={addQuantity} placeholder="Enter quantity" />


<button  type="submit" onClick={cxt.onSubmitFormDeatils}>SUBMIT</button>

</form>
</div>
  )
}

export default Input