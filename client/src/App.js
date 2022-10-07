import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Container} from "react-bootstrap";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Topbar from "../src/components/Topbar";
import About from "../src/components/About";
import Contact from "./components/Contact";
import  Policy  from "./components/Policy";
import Nabbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
// import AddNewMango from "../components/Admin/AddNewMango";
import OrderList from "./components/Admin/OrderList";
import Mangolist from "./components/Admin/Mangolist";
import Userlist from "./components/Admin/Userlist";
import EditMango from "./components/Admin/EditMango";
import AddNewMango from "./components/Admin/AddNewMango";
function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Nabbar/>
      {/*<About/>*/}
      <Routes>
  <Route  path="/cart" element={<CartScreen/>}/> 
  <Route  path="/orders" element={<OrderScreen/>}/> 

 <Route  path="/register" element={<Register/>}/>
  <Route  path="/login" element={<Login/>}/>
        <Route  path="/admin" element={<AdminScreen/>}/> 
        <Route  path="/about" element={<About/>}/> 
        <Route  path="/contact" element={<Contact/>}/> 
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/admin/addnewmango" element={<AddNewMango/>}/>
        <Route path="/admin/mangolist" element={<Mangolist/>}/>
        <Route path="/admin/userlist" element={<Userlist/>}/>
        <Route path="/admin/orderlist" element={<OrderList/>}/>
        <Route path="/admin/editmango" element={<EditMango/>}/>




        <Route path="/" element={<HomeScreen/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
