import { setAlert } from "./alert";
import { LOGIN_SUCCESS, LOGOUT, SET_USER } from "../types/auth";
import { serverInstance } from "../../api/server.config";
import { LOGIN_URL, LOGOUT_URL, REGISTER_URL, USER_DATA_URL } from "../../api/api-client";

// Register user
export const register = (userCredentials, navigate) => async dispatch => {
    try {
        const response = await serverInstance.post(REGISTER_URL, userCredentials);

        if(response.statusText) {
            dispatch(setAlert(response.data.message, "success", 4000));
            navigate('/login');
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

// Login user
export const login = ({ email, password }, navigate) => async (dispatch) => {
    try {
        const response = await serverInstance.post(LOGIN_URL, {
            email, password
        });

        if(response.statusText) {
            const { userName } = response.data;
            const responseToken = response.headers.authorization.split(' ')[1];
            localStorage.setItem('token', responseToken);

            dispatch({ type: LOGIN_SUCCESS });
            dispatch(setAlert(`Welcome back ${userName}!`, 'success', 4000));
            navigate('/');
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

// User Profile
export const getUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await serverInstance.get(USER_DATA_URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        dispatch({ type: SET_USER, payload: { user: response.data.user } });
    } catch(error) {
        dispatch(setAlert(error.message, 'error', 4000));
    }
};

// Logout user
export const logout = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await serverInstance.get(LOGOUT_URL, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        localStorage.removeItem('token');
        dispatch({ type: LOGOUT });
        dispatch(setAlert(response.data.message, 'success', 4000));
    } catch(error) {
        dispatch(setAlert(error.message, 'error', 4000));
    }
};