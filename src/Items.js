import { useContext } from "react";

import { cartContax } from "./Cart";
const Items=({title,description,price, img, id ,index, quantity})=>{
        const {removeItem ,increment ,totalItem , decrement} = useContext(cartContax)

    return (
        <>
         <div className='items-info'>
           <div className='product-img'>
               <img src = {img} alt='p1' />

               </div>
               <div className='title'>
                   <h2>{title} </h2>
                   <p>{description} </p>
               </div>
               <div className='add-minus-quantity'>
               <i class="fa fa-minus minus" aria-hidden="true" onClick={()=> decrement(id)} ></i>
                    <input type='text' placeholder= {quantity}  />
                    <i class="fa fa-plus" aria-hidden="true" onClick={()=>increment(id)}></i>
               </div>
               <div className='price'>
                   <h3>{price} </h3>
               </div>
               <div className='remove-item'>
               <i class="fa fa-trash-alt remove" aria-hidden="true" onClick={()=> removeItem(id) } ></i>
               </div>
               <hr/>
           </div>
        </>
    )
}
export default Items;