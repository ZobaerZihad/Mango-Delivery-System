import React from "react";

import {Navbar, Nav,Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AdminNav() {
  return (
    <>
       <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/admin/userlist" activeClassName="active_class">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/mangolist" activeClassName="active_class">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/addnewmango" activeClassName="active_class">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/orderlist" activeClassName="active_class">
            <Nav.Link>Terms and policy</Nav.Link>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
    
    </>
    
   
    
  );
}

export default AdminNav;
