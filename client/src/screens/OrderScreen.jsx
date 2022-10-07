import React,{useEffect} from 'react'
import { getUserOrders } from '../actions/orderAction';
import {Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
 import Loader from '../components/Loader';
import Error from '../components/Error';



const OrderScreen = () => {
 const orderState = useSelector(state => state.getUserOrdersReducer)
 const {loading,error,orders} = orderState
 const dispatch = useDispatch();
 useEffect(()=>{
 dispatch(getUserOrders());
 },[dispatch]);

  return (
    <>
<div style={{background: "rgb(34,193,195)",background: "linear-gradient(55deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",minHeight:"100vh" }}>
  <h1 className='container text-center'style={{paddingTop:"15px"}}>OrderScreen</h1>
    {loading && (<Loader/>)}
    {error && (<Error error="something went wrong"/>)}
    {
      orders && orders.map((order) => (
        <Row className="container border p-4 bg-light" style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
          <Col md={4}>
          <h4>Item:</h4><hr/>
          {
            
            order.orderItems.map((item) =>(
            <div>
              <h6>{item.name} [{item.varient}]*{item.quantity}={" "}{item.price}</h6>
            </div>
          ))
          }
          </Col>
            <Col md={3}>
                <h4>Address :</h4><hr/>
                <h6>Street : {order.shippingAddress.street}</h6>
                <h6>City : {order.shippingAddress.city}</h6>
                <h6>PinCode : {order.shippingAddress.picode}</h6>
                <h6>Countery : {order.shippingAddress.country}</h6>
              </Col>
              <Col md={5}>
                <h4>Order Info :</h4><hr/>
                <h6>Order Amount : {order.orderAmount}</h6>
                <h6>Transection id : {order.transectionId}</h6>
                <h6>Order id : {order._id}</h6>
              </Col>
        </Row>
      ))
    }
</div>
       
    </>
    
  );
};

export default OrderScreen;