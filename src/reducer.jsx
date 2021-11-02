const reducer=(state,action)=>{
if(action.type === 'REMOVE_ITEM' ){
    return {
        ...state,
        item: state.item.filter((curr)=>{
            return curr.id !== action.payload
        })
    }
}

if(action.type==='CLEAR_CART'){
    return{
        ...state,
        item : []
    }
}
 if(action.type==='INCREMENT'){
    
        let updatedcart = state.item.map((curr)=>{
            if(curr.id=== action.payload){
                return{
                    ...curr,
                    quantity : curr.quantity+1
                }

            }
            return curr;
        })
           
    
      return {...state , item: updatedcart}
       
    
}
 if(action.type==='DECREMENT'){
    
        let updatedcart = state.item.map((curr)=>{
            if(curr.id=== action.payload){
                return{
                    ...curr,
                    quantity : curr.quantity-1
                }
              
            }
            return curr;
            
        }).filter((curr)=>{
            return curr.quantity !== 0;
            
        })
      return {...state , item: updatedcart}
       
   
}
if(action.type==='GET_TOTAL'){
    let {totalItem ,totalAmount } = state.item.reduce(
        (accum,curval)=>{
            let {quantity,price} = curval;
            let updatedtotalamount = price * quantity;
            accum.totalAmount += updatedtotalamount;
            accum.totalItem += quantity;
            return accum;
        },
        {
            totalItem:0,
            totalAmount:0
        }
    )
    return {...state,totalItem ,totalAmount}
}

return state
}
export default reducer;