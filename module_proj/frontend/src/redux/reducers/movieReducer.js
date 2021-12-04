import {
    GET_FILMS, LOADING_FILMS_FINISHED,
    LOADING_FILMS_STARTED
} from "../types/films";

const initialState = {
    movies: null,
    favourites: null,
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
        case LOADING_FILMS_STARTED:
            return {
                ...state,
                loading: true
            };
        case LOADING_FILMS_FINISHED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default movieReducer;