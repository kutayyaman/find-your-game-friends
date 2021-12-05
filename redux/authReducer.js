import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Constants";

const defaultState = {
    isLoggedIn: false,
    mail:undefined,
    password: undefined,
    image: undefined,
  };

  const authReducer = (state={...defaultState},action) => {
    if(action.type==LOGOUT_SUCCESS){
      return defaultState;
    }
    if(action.type==LOGIN_SUCCESS){
      return {
        ...action.payload,
        isLoggedIn:true
      }
    }
    return state;
  }

  export default authReducer;