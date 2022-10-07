import React, { useState } from 'react'
import {Card,Button,Row ,Col,Modal} from 'react-bootstrap';
import {useDispatch,useSelector} from "react-redux";
import {addToCart} from "../actions/cartAction";
function Mango({mango}) {
  const [varient,setVarient] =useState("kgs_20")
  const [quantity,setQuantity] =useState(1)
   const [show, setShow] = useState(false);


   const dispatch=useDispatch();



const addToCartHandler=()=>{
  dispatch(addToCart(mango,quantity,varient))
}


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '21rem',marginTop:'20px',backgroundColor:'rgb(169, 227, 214)',borderRadius:'5px' }}>
  <Card.Img variant="top" src={mango.image} style={{height:"200px",cursor:"pointer"}} onClick={handleShow} />
  <Card.Body>
    <Card.Title><h3>{mango.name}</h3></Card.Title><hr/>
    <Card.Text>
      <Row>
        <Col md={6}>
          <h6 style={{fontWeight: '900',color: 'rgb(95,48,48)'}}>Varients</h6>
          <select value={varient} onChange={e=>setVarient(e.target.value)}>
            {mango.varients.map((varient) => (
              <option>{varient}</option>
            ))}
          </select>
          
        </Col>
        <Col md={6}>
          <h6 style={{fontWeight: '900',color: 'rgb(95,48,48)'}}>Quantity</h6>
          <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((v,i)=>(<option value={i+1} >{i+1}</option>))}
          </select>
        </Col>
      </Row>
    </Card.Text>
    <Row>
      <Col md={6}><h6 style={{fontWeight: '600',color: 'rgb(95,48,48)'}}>Price : {mango.prices[0][varient]*quantity} /-BDT</h6>
        
      </Col>
      <Col md={6}><Button onClick={addToCartHandler} variant="contained" className='bg-success text-white'>Add to Cart</Button></Col>
    </Row>
  </Card.Body>
</Card>



<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontWeight: '900',color: 'rgb(95,48,48)'}}>{mango.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div><Card.Img variant="top" src={mango.image} style={{height:"200px",}} /></div></Modal.Body>
        <div style={{padding:"15px"}}>
          <h5 style={{fontWeight: '900',color: 'rgb(95,48,48)'}}>Description :</h5>
          <h6>{mango.description}</h6>
        </div>
      </Modal>

    </>
  )
}

export default Mango;