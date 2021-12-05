import { setAlert } from "./alertActions";
import { LOGIN_SUCCESS, LOGOUT } from "../types/authTypes";
import { serverInstance } from "../../api/server.config";
import { LOGIN_URL, LOGOUT_URL, REGISTER_URL } from "../../api/api-client";
import { setUserFavoritesIDS } from "./movieActions";
import { setAuthHeaders } from "../../utils/utils";
import { CLEAR_MOVIES } from "../types/movieTypes";

// Register user
export const register = (userCredentials, navigate) => async dispatch => {
    try {
        const response = await serverInstance.post(REGISTER_URL, userCredentials);

        if(response.status === 200) {
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

        if(response.status === 200) {
            const { currentUser: { favorites, ...userInfo } } = response.data;
            const responseToken = response.headers.authorization.split(' ')[1];

            localStorage.setItem('token', responseToken);

            dispatch({ type: LOGIN_SUCCESS, payload: userInfo });
            dispatch(setUserFavoritesIDS(favorites));
            dispatch(setAlert(`Welcome back ${userInfo.name}!`, 'success', 4000));
            navigate('/');
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

// Logout user
export const logout = () => async (dispatch) => {
    try {
        const response = await serverInstance.get(LOGOUT_URL, {
            headers: setAuthHeaders()
        });

        localStorage.removeItem('token');

        dispatch({ type: LOGOUT });
        dispatch({ type: CLEAR_MOVIES });
        dispatch(setAlert(response.data.message, 'success', 4000));
    } catch(error) {
        dispatch(setAlert(error.message, 'error', 4000));
    }
};