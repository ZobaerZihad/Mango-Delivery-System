import axios from "axios";
import swal from 'sweetalert';
export const getAllMangos=()=>async (dispatch)=>{
 dispatch({type:"GET_MANGOS_REQUEST"});
 try {
  const res=await axios.get("/api/mangos/getAllMangos");
  console.log(res);
  dispatch({type:"GET_MANGOS_SUCCESS",payload:res.data});
 } catch (err) {
  dispatch({type:"GET_MANGOS_FAIL",payload:err});
 }
};

export const addMango = (mango) => async (dispatch) => {
  dispatch({ type: "ADD_MANGOS_REQUEST" });
  try {
    await axios.post("/api/mangos/addmango", { mango });
    dispatch({ type: "ADD_MANGOS_SUCCESS" });
  } catch (err) {
    dispatch({ type: "ADD_MANGOS_FAIL", payload: err });
  }
};



export const getMangoById = (mangoId) => async (dispatch) => {
  dispatch({ type: "GET_MANGOBYID_REQUEST" });
  try {
    const response = await axios.post("/api/mangos/getmangobyid", { mangoId });
    dispatch({ type: "GET_MANGOBYID_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_MANGOBYID_FAIL", payload: err });
  }
};


export const updateMango = (updatedMango) => async (dispatch) => {
  dispatch({ type: "UPDATE_MANGOBYID_REQUEST" });
  try {
    const response = await axios.post("/api/mangos/updatemango", {
      updatedMango,
    });
    dispatch({ type: "UPDATE_MANGOBYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/mangolist";
  } catch (err) {
    dispatch({ type: "UPDATE_MANGOBYID_FAIL", payload: err });
  }
};

export const deleteMango = (mangoId) => async (dispatch) => {
  try {
    await axios.post("/api/mangos/deletemango", { mangoId });
    swal("Mango Deleted Succss!", "success");
    window.location.href = "/admin/mangolist";
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing Mango");
  }
};