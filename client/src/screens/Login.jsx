import React,{useState,useEffect} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useDispatch, userDispatch,useSelector} from 'react-redux'
import {loginUser} from '../actions/userAction'
const Login= () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch=useDispatch()
useEffect(()=>{
if(localStorage.getItem('currentUser')){
    window.location.href="/";
}
},[])
const loginHandler=()=>{
    const user ={email,password}
    dispatch(loginUser(user))
}

    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Admin Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>

                            <Button variant="success btn-block"  onClick={loginHandler}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Zobaer Zihad. All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default Login;