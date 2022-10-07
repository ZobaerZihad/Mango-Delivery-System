import React from 'react';
import {Navbar,Nav,Container,Image,NavDropdown} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import {LinkContainer} from "react-router-bootstrap";
import { logoutUser } from '../actions/userAction'; 
function Nabbar(){
  const dispatch =useDispatch();
  const cartState=useSelector((state)=>state.cartReducer);
  const  userState =useSelector(state =>state.loginUserReducer);
  const {currentUser} =userState
  return (
   <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand ><Image src='../img/index.png' alt='Mango' style={{height:"50px"}}/><h2 style={{display:"inline-block"}}>Mangovery</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="ms-auto">
{
  currentUser?(
    <LinkContainer to="/">
      {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
        <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
              <LinkContainer to="/orders"><NavDropdown.Item >Order</NavDropdown.Item></LinkContainer>

          
          <NavDropdown.Item onClick={()=>{dispatch(logoutUser())}}>Log out</NavDropdown.Item>
     
        </NavDropdown>
    </LinkContainer>
  ):(
    <>
    {" "}
       <LinkContainer to="/register"><Nav.Link href="#features">Register</Nav.Link></LinkContainer>
      <LinkContainer to="/login"><Nav.Link href="#features">Log In</Nav.Link></LinkContainer>
    </>
  )
}

   
      <LinkContainer to="/cart"><Nav.Link href="#features">Cart {cartState.cartItems.length}</Nav.Link></LinkContainer>
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
  
  </>);
}
export default Nabbar;