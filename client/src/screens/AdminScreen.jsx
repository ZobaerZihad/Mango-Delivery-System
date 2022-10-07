import React, { useEffect } from "react";
import { Row, Col, Container, Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import { useSelector } from "react-redux";


// import AddNewMango from "../components/Admin/AddNewMango";
// import OrderList from "../components/Admin/OrderList";
// import Mangolist from "../components/Admin/Mangolist";
// import Userlist from "../components/Admin/Userlist";
// import EditMango from "./../components/Admin/EditMango";


const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  // let navigate = useNavigate();

  // const goHome = () => {
  //   navigate("/admin/zihad");
  // };
  // const userState = useSelector((state) => state.loginUserReducer);
  // const { currentUser } = userState;
  // useEffect(() => {
  //   if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
  //     window.location.href = "/";
  //   }
  // }, [currentUser]);
  return (
    <>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
          <Nav className="ml-auto">
                   <LinkContainer to="/admin/addnewmango"><Nav.Link href="#features">AddNewMango</Nav.Link></LinkContainer>
                   <LinkContainer to="/admin/orderlist"><Nav.Link href="#features">OrderList</Nav.Link></LinkContainer>
                   <LinkContainer to="/admin/mangolist"><Nav.Link href="#features">Mangolist</Nav.Link></LinkContainer>
                   <LinkContainer to="/admin/userlist"><Nav.Link href="#features">Userlist</Nav.Link></LinkContainer>
                   <LinkContainer to="/admin/editmango"><Nav.Link href="#features">EditMango</Nav.Link></LinkContainer>

          </Nav>
        </Container>
      </Navbar>
        
         
            
         
      
    </>
  );
};
export default AdminScreen;