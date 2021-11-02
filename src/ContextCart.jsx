import Items from "./Items";

import {React,useContext,useState} from 'react'
import { cartContax } from "./Cart";
import { products } from "./Products";
const ContextCart=()=>{
    const {item,totalItem ,totalAmount } = useContext(cartContax)

   const {clearCart  } = useContext(cartContax)

   if(item.length===0){
     return (
       <>
         <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>0</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count"> 0 </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">

            {item.map((currItem,index)=>{
                return  <Items key={currItem.id} index={index}  {...currItem} />
            })}
          

          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>00rs</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart} >
            Clear Cart
          </button>
        </div>
      </section>
       </>
     )
   }

    return(
      <>
        <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count"> {totalItem}  </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">

            {item.map((currItem,index)=>{
                return  <Items key={currItem.id} index={index}  {...currItem} />
            })}
          

          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}rs </span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart} >
            Clear Cart
          </button>
        </div>
      </section>
      </>
    )
}
export default ContextCart;