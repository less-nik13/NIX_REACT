
import { setAlert } from "./alert";
import { LOGIN_SUCCESS, LOGOUT } from "../types/auth";
import { serverInstance } from "../../api/server.config";
import { LOGIN_URL, REGISTER_URL } from "../../api/api-client";

// Register user
export const register = (userCredentials, navigate) => async dispatch => {
    try {
        console.log(userCredentials);
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
        const url = 'api/auth/login';
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
// export const getUser = () => async (dispatch) => {
//     try {
//         const url = '/user';
//         const token = localStorage.getItem('token');
//         const response = await instance(url, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });
//
//         dispatch({ type: SET_USER, payload: { user: response.data.user } });
//     } catch(error) {
//         dispatch(setAlert(error.message, 'error', 4000));
//     }
// };

// Logout user
export const logout = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const url = '/user/logout';
        const response = await serverInstance.get(url, {
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