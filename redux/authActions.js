import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Constants";

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

export const loginSuccess = (authState) => {
    return {
        type: LOGIN_SUCCESS,
        payload: authState
    };
};