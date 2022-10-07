export const addToCart = (mango,quantity,varient)=>(dispatch,getState)=>{
var cartItem={
 name:mango.name,
 _id:mango._id,
 image:mango.image,
 varient:varient,
 quantity:Number(quantity),
 prices:mango.prices,
 price:mango.prices[0][varient]*quantity,
};
if(cartItem.quantity>10){
 alert("You can only add 10 quatity");
}
else{
 if(cartItem.quantity<1)
 {
  dispatch({type:"DELETE_FROM_CART",payload:mango});
 }
 else{
  dispatch({type:"ADD_TO_CART",payload:cartItem});
localStorage.setItem("cartItems",JSON.stringify(getState().cartReducer.cartItems));
 }
 
}

};
export const deleteFromCart = (mango)=>(dispatch,getState)=>{
 dispatch({type:"DELETE_FROM_CART",payload:mango})
 const cartItems=getState().cartReducer.cartItems;
 localStorage.setItem("cartItems",JSON.stringify(cartItems))
};