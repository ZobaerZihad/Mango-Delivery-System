import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux';
import { Container,Row,Col} from 'react-bootstrap';
import {getAllMangos} from "../actions/mangoAction";
import Mango from "../components/Mango";
import "../screens/HomeScreen.css";

import { getAllMangoReducer } from '../reducers/mangoReducer';
import Loader from '../components/Loader';
import Error from '../components/Error';
function HomeScreen() {
  const dispatch=useDispatch();
  const mangostate=useSelector(state=>state.getAllMangoReducer)
  const {loading,mangos,error}=mangostate;
  useEffect(()=>{dispatch(getAllMangos());},[dispatch]);
  return (
    <>
    <div className='Homebody'>
      <Container>
      {loading?(<Loader/>)
      :error?(
       <Error>Error while fetching mangoes {error}</Error>
      ):
      (
        <Row>
       {mangos.map((mango)=>(
        <Col md={4}>
         <Mango mango={mango}/>
        </Col>
       ))}
      </Row>
      )
      }
      
     </Container>
    </div>
    
    </>
  )
}

export default HomeScreen;