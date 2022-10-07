export const getAllMangoReducer =(state = {mangos:[]},action)=>{switch(action.type){
 case "GET_MANGOS_REQUEST":
  return{
   ...state,
   loading:true
  };
  case "GET_MANGOS_SUCCESS":
   return{
    mangos:action.payload,
    loading:false
   };
   case "GET_MANGOS_FAIL":
    return{
     error:action.payload,
     loading:false
    };
    default:
     return state;
}
};
export const addMangoReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_MANGOS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_MANGOS_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "ADD_MANGOS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};



export const getMangoByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_MANGOBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MANGOBYID_SUCCESS":
      return {
        mango: action.payload,
        loading: false,
      };
    case "GET_MANGOBYID_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateMangoByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_MANGOBYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_MANGOBYID_SUCCESS":
      return {
        updatesuccess: true,
        updateloading: false,
      };
    case "UPDATE_MANGOBYID_FAIL":
      return {
        updateloading: false,
        updateerror: action.payload,
      };
    default:
      return state;
  }
};
