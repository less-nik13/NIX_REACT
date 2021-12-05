import {
    ADD_TO_FAVORITES,
    ADD_TO_FAVORITES_IDS,
    GET_FILMS,
    GET_FAVORITES,
    LOADING_MOVIES_FINISHED,
    LOADING_MOVIES_STARTED,
    REMOVE_FROM_FAVORITES,
    REMOVE_FROM_FAVORITES_IDS,
    SET_USER_FAVORITES_IDS
} from "../types/movieTypes";
import {
    ADD_TO_FAVORITES_URL,
    GET_FAVORITES_URL,
    GET_MOVIES_URL,
    REMOVE_FROM_FAVORITES_URL
} from "../../api/api-client";
import { setAlert } from "./alertActions";
import { apiInstance } from "../../api/axios.config";
import { serverInstance } from "../../api/server.config";
import { setAuthHeaders } from "../../utils/utils";

export const getMovies = (options) => async (dispatch) => {
    try {
        const response = await apiInstance.get(GET_MOVIES_URL, {
            params: {
                ...options
            }
        });
        const moviesData = response.data;

        dispatch({ type: LOADING_MOVIES_STARTED });

        if(response.status === 200) {
            dispatch({ type: LOADING_MOVIES_FINISHED });
            dispatch({ type: GET_FILMS, payload: moviesData });
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const getFavorites = () => async (dispatch) => {
    try {
        const response = await serverInstance.get(GET_FAVORITES_URL, {
            headers: setAuthHeaders()
        });

        const { favorites } = response.data;

        dispatch({ type: LOADING_MOVIES_STARTED });

        if(response.status === 200) {
            dispatch({ type: LOADING_MOVIES_FINISHED });
            dispatch({ type: GET_FAVORITES, payload: favorites });
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const addToFavorites = (movie) => async (dispatch) => {
    try {
        const response = await serverInstance.post(ADD_TO_FAVORITES_URL, { movie }, {
            headers: setAuthHeaders()
        });
        const { message } = response.data;

        if(response.status === 200) {
            dispatch({ type: ADD_TO_FAVORITES_IDS, payload: movie.id });
            dispatch({ type: ADD_TO_FAVORITES, payload: movie });
            dispatch(setAlert(message, 'success', 4000));
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const removeFromFavorites = (id) => async (dispatch) => {
    try {
        const response = await serverInstance.delete(`${REMOVE_FROM_FAVORITES_URL}/${id}`, {
            headers: setAuthHeaders()
        });

        const { message } = response.data;

        if(response.status === 200) {
            dispatch({ type: REMOVE_FROM_FAVORITES_IDS, payload: id });
            dispatch({ type: REMOVE_FROM_FAVORITES, payload: id });
            dispatch(setAlert(message, 'success', 4000));
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const setUserFavoritesIDS = (favorites) => {
    return {
        type: SET_USER_FAVORITES_IDS,
        payload: favorites
    };
};