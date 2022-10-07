import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch,useSelector} from "react-redux"
import { placeOrder } from '../actions/orderAction';
import Loader from './Loader';
import Success from './Success'
import Error from './Error'
const Checkout = ({subTotal}) => {
  const orderState = useSelector(state =>state.placeOrderReducer)
  const {loading,error,success} = orderState
 const dispatch=useDispatch();
 const tokenHandler = (token) =>{
  dispatch(placeOrder(token,subTotal));
  console.log(token);
 };
  return(
    <>
      {loading && (<Loader/>)}
    {error && (<Error error="something went wrong"/>)}
    {success && (<Success success="order placed success"/>)}
    <StripeCheckout
    amount={subTotal*100}
    shippingAddress
    token={tokenHandler}
    stripeKey="pk_test_51LIcqkIwbLHCp0yF2S896DP4WIMtG1NGxnGINMaobcAuDUwEEeFtXc59pDd1inNUctDMDqyjPkyHtRcjq4mUaQEE00jUIWtwgr"
    currency='BDT'
    
    >

     <Button>Pay Now</Button>
    </StripeCheckout>
    </>
  ) 
    
  
};

export default Checkout;