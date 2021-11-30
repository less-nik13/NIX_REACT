import {
    GET_FILMS,
    LOADING_FILMS_STARTED
} from "../types/films";

const initialState = {
    films: null,
    favourites: null,
    loading: true,
};

const filmsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_FILMS:
            return {
                todos: payload, loading: false
            };
        case LOADING_FILMS_STARTED:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default filmsReducer;