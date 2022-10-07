import React from "react";

import {Navbar, Nav,Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {MdLocalOffer} from "react-icons/md";

function Topbar() {
  return (
    <>
       <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <h6 className="text-light">
          <MdLocalOffer className="text-warning"/>&nbsp;&nbsp;Free Home Mango Delivery on Order Above 5000/=
        </h6>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/" activeClassName="active_class">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" activeClassName="active_class">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact" activeClassName="active_class">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/policy" activeClassName="active_class">
            <Nav.Link>Terms and policy</Nav.Link>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
    
    </>
    
   
    
  );
}

export default Topbar;
