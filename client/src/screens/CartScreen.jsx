import React from "react";
import { Container,Row,Col, Button } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import "../components/style.css"
import {FaMinusCircle,FaPlusCircle,FaTrash} from "react-icons/fa"
import {addToCart,deleteFromCart} from '../actions/cartAction'
import Checkout from "../components/Checkout";
function CartScreen()
{


 const cartState=useSelector(state => state.cartReducer)
 const cartItems=cartState.cartItems
 const dispatch=useDispatch()
 const subTotal=cartItems.reduce((x,item)=>x+item.price,0)
 return(
  <>
      <div className="bod" style={{color:"#FFF7F8",paddingTop:"20px"}}>

<Container  >
 <Row>
  <Col md={6}><h1>Cart items</h1>
  <Row >
   {cartItems.map((item)=>(
    <>
     <Col style={{marginTop:"10px"}} md={7}>
      <h5>
       {item.name}[{item.varient}]
      </h5>
      <h6>
       {" "}
       Price : {item.quantity}X{item.prices[0][item.varient]}={" "}
       {item.price}
      </h6>
      <h6>Quantity : &nbsp;
      <FaMinusCircle className="text-danger" style={{cursor:"ponter"}} onClick={()=>{
        dispatch(addToCart(item,item.quantity-1,item.varient));
      }}/>
      &nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;<FaPlusCircle className="text-success" style={{cursor:"ponter"}} onClick={()=>{
        dispatch(addToCart(item,item.quantity+1,item.varient));
      }}/></h6>
     </Col>
     <Col md={5}>
      <img alt={item.name} src={item.image} style={{width:"80px",height:"80px",borderRadius:"10px"}}/>
      <FaTrash className="text-danger" style={{cursor:"ponter",marginLeft:"20px"}} onClick={()=>{
        dispatch(deleteFromCart(item));
      }}/>
     </Col>
     <hr/>
    </>
   ))}
  </Row>
  </Col>
 <Col md={4} style={{textAlign:"center"}}>
  <h1>
   Payment Info
  </h1>
  <hr/>
  <h3>Sub Total</h3>
  <h4>BDT :  {subTotal} /=</h4>
  <Checkout subTotal={subTotal}/>
 </Col>
 </Row>
</Container>
 </div>
 </>
 )
 
}
export default CartScreen;