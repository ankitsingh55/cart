import Items from "./Items";
import React, { createContext, useReducer, useState } from 'react';
import { products } from "./Products";
import ContextCart from "./ContextCart";
import reducer from "./reducer";
import { useEffect } from "react/cjs/react.development";

 export const cartContax= createContext();

 const initialstate={
   item : products,
   totalAmount:0,
   totalItem:0,
 }


const Cart=()=>{
  const [state,dispatch] = useReducer(reducer,initialstate)

  const removeItem=(id)=>{
return dispatch({
  type: 'REMOVE_ITEM',
  payload:id,
})
};
const clearCart=()=>{
return dispatch({
  type:'CLEAR_CART',
})
}

const increment=(id)=>{
  return dispatch({
    type:"INCREMENT",
    payload:id,
  })
}
const decrement=(id)=>{
  return dispatch({
    type:"DECREMENT",
    payload:id,
  })
}

useEffect(()=>{
  dispatch({
    type:'GET_TOTAL'
  })
}, [state.item])
  
    return(
        <>
        <cartContax.Provider value={{...state ,removeItem,clearCart,increment,decrement }} >
       <ContextCart/>
       </cartContax.Provider>
        </>
    )
}
export default Cart;