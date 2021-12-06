import axios from "axios";

import {
    ADD_TO_FAVORITES,
    ADD_TO_FAVORITES_IDS,
    GET_FAVORITES,
    LOADING_MOVIES_FINISHED,
    LOADING_MOVIES_STARTED,
    REMOVE_FROM_FAVORITES,
    REMOVE_FROM_FAVORITES_IDS,
    SET_USER_FAVORITES_IDS,
    SET_SEARCH,
    GET_MOVIES,
    CHANGE_PAGE
} from "../types/movieTypes";
import {
    ADD_TO_FAVORITES_URL,
    API_BASE_URL,
    GET_FAVORITES_URL,
    REMOVE_FROM_FAVORITES_URL,
    SEARCH_URL
} from "../../api/api-client";
import { setAlert } from "./alertActions";
import { serverInstance } from "../../api/server.config";
import { setAuthHeaders } from "../../utils/utils";

export const loadMovies = async (endpoint, currentPage, totalPages, params, dispatch) => {
    try {
        dispatch({ type: LOADING_MOVIES_STARTED });
        const response = await axios.get(`${API_BASE_URL}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}${params ? params : ''}`);
        const moviesData = response.data;

        if(moviesData.total_pages !== totalPages) {
            moviesData.page = 1;
        }

        if(response.status === 200) {
            dispatch({ type: LOADING_MOVIES_FINISHED });
            dispatch({ type: GET_MOVIES, payload: moviesData });
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const getMovies = (url, currentPage, totalPages, params) => (dispatch) => {
    loadMovies(url, currentPage, totalPages, params, dispatch);
};

// request to localhost:5000
export const getFavorites = () => async (dispatch) => {
    try {
        dispatch({ type: LOADING_MOVIES_STARTED });
        const response = await serverInstance.get(GET_FAVORITES_URL, {
            headers: setAuthHeaders()
        });

        const { favorites } = response.data;


        if(response.status === 200) {
            dispatch({ type: LOADING_MOVIES_FINISHED });
            dispatch({ type: GET_FAVORITES, payload: favorites });
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

// request to localhost:5000
export const addToFavorites = (movie) => async (dispatch, getState) => {
    try {
        const response = await serverInstance.post(ADD_TO_FAVORITES_URL, { movie }, {
            headers: setAuthHeaders()
        });
        const { message } = response.data;
        const state = getState();

        if(response.status === 200) {
            dispatch({ type: ADD_TO_FAVORITES_IDS, payload: movie.id });
            state.movie.favorites.length && dispatch({ type: ADD_TO_FAVORITES, payload: movie });
            dispatch(setAlert(message, 'success', 4000));
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

// request to localhost:5000
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

export const getMoviesBySearchQuery = (currentPage, totalPages, query) => (dispatch) => {
    loadMovies(SEARCH_URL, currentPage, totalPages, `&query=${query}`, dispatch);
};

export const setUserFavoritesIDS = (favorites) => {
    return {
        type: SET_USER_FAVORITES_IDS,
        payload: favorites
    };
};

export const setSearch = (value) => {
    return {
        type: SET_SEARCH,
        payload: value
    };
};

export const changePage = (page) => {
    return {
        type: CHANGE_PAGE, payload: page
    };
};
