import React, { Component } from 'react'
import {Form,FormControl,FormLabel,Button} from 'react-bootstrap'
import "./contact.css";
import {AiOutlineHome,AiOutlinePhone,AiTwotoneMail} from "react-icons/ai";
export default class Contact extends Component {
  render() {
    return (
      <div className='body'>
       <div className="section">
    
    <div className="section-header">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    <div className="container">
      <div className="row">
        
        <div className="contact-info">
          
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <AiOutlinePhone/>
            </div>
            
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
             <AiTwotoneMail/>
            </div>
            
            <div className="contact-info-content">
              <h4>Email</h4>
             <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
             <AiOutlineHome/>
            </div>
            
            <div className="contact-info-content">
              <h4>Address</h4>
             <p>4671 Sugar Camp Road,America</p>
            </div>
          </div>

        </div>
        
        <div className="contact-form">
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        
      </div>
    </div>
  </div>
</div>  
      
    );
  }
}
