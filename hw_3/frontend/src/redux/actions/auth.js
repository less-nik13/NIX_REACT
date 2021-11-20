import { instance } from "../../utils/axios.config";
import { setAlert } from "./alert";
import { LOGIN_SUCCESS, LOGOUT, SET_USER } from "../types/auth";

// Register user
export const register = (userCredentials, history) => async dispatch => {
    try {
        const url = '/auth/register';
        const response = await instance.post(url, userCredentials);

        if(response.statusText) {
            dispatch(setAlert(response.data.message, "success", 4000));
            history.push('/login');
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

// Login user
export const login = ({ email, password }, history) => async (dispatch) => {
    try {
        const url = '/auth/login';
        const response = await instance.post(url, {
            email, password
        });

        if(response.statusText) {
            const { userName } = response.data;
            const responseToken = response.headers.authorization.split(' ')[1];
            localStorage.setItem('token', responseToken);

            //Если статус ответа ОК, то берём из auth-хедера ответа токен и добавляем
            // в локальное хранилище под флагом token
            dispatch({ type: LOGIN_SUCCESS });
            dispatch(setAlert(`Welcome back ${userName}!`, 'success', 4000));
            history.push('/');
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

// User Profile
export const getUser = () => async (dispatch) => {
    try {
        const url = '/user';
        const token = localStorage.getItem('token');
        const response = await instance(url, {
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
        const url = '/user/logout';
        const response = await instance(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        //Если пользователь авторизован, то из локального хранилища удаляем токен
        if(token) {
            localStorage.removeItem('token');
            dispatch({ type: LOGOUT });
            dispatch(setAlert(response.data.message, 'success', 4000));
        }
    } catch(error) {
        dispatch(setAlert(error.message, 'error', 4000));
    }
};