import React from "react";

import { Container,Row,Col,Image } from "react-bootstrap";
import images from "./images";
import ImageSlider from "./ImageSlider";
import "./style.css"
function About(){
 return(
  
   <div className="bod">
   <div className="section">
    <ImageSlider images={images}/>
  <Container className="cont">
<Row >
    <Col className="col1"><h1 className="about">About Us</h1></Col>
    <Col className="col2" xs={8}>Mangovery is an online mango ordering and delivery platform launched by Uber in 2014. The company has been criticized for antitrust price manipulation. Users can read menus, reviews and ratings, order, and pay for mango from participating restaurants using an application on the iOS or Android platforms, or through a web browser. Users are also able to tip for delivery.Payment is charged to a card on file with Mangovery . Mangoes are delivered by couriers using cars, scooters, bikes, or on foot.</Col>
  </Row></Container>
   </div>
    
   </div>
  
  
 

   
  
 );
}
export default About;