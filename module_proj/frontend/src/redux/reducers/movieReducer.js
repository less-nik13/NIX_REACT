import {
    LOADING_MOVIES_FINISHED,
    LOADING_MOVIES_STARTED,
    SET_USER_FAVORITES_IDS,
    ADD_TO_FAVORITES_IDS,
    ADD_TO_FAVORITES,
    GET_FILMS,
    REMOVE_FROM_FAVORITES_IDS,
    REMOVE_FROM_FAVORITES,
    GET_FAVORITES,
    CLEAR_MOVIES
} from "../types/movieTypes";

const initialState = {
    movies: [],
    favorites: [],
    favoritesIDS: [],
    loading: true,
    currentPage: 1,
    totalPages: 1
};

const movieReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_FILMS:
            return {
                ...state, movies: payload.results, currentPage: payload.page, totalPages: payload.total_pages
            };
        case LOADING_MOVIES_STARTED:
            return {
                ...state,
                loading: true
            };
        case LOADING_MOVIES_FINISHED:
            return {
                ...state,
                loading: false
            };
        case SET_USER_FAVORITES_IDS:
            return {
                ...state, favoritesIDS: payload
            };
        case ADD_TO_FAVORITES_IDS:
            return {
                ...state, favoritesIDS: [ payload, ...state.favoritesIDS ]
            };
        case ADD_TO_FAVORITES:
            return {
                ...state, favorites: [ payload, ...state.favorites ]
            };
        case GET_FAVORITES:
            return {
                ...state, favorites: [ ...payload, ...state.favorites ]
            };
        case REMOVE_FROM_FAVORITES_IDS:
            return {
                ...state, favoritesIDS: [ ...state.favoritesIDS.filter(movieId => movieId !== payload) ]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state, favorites: [ ...state.favorites.filter(movie => movie.id !== payload) ]
            };
        case CLEAR_MOVIES:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default movieReducer;