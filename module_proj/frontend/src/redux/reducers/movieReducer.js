import {
    LOADING_MOVIES_FINISHED,
    LOADING_MOVIES_STARTED,
    SET_USER_FAVORITES_IDS,
    ADD_TO_FAVORITES_IDS,
    ADD_TO_FAVORITES,
    GET_MOVIES,
    REMOVE_FROM_FAVORITES_IDS,
    REMOVE_FROM_FAVORITES,
    GET_FAVORITES,
    CLEAR_MOVIES, SET_SEARCH, CHANGE_PAGE, GET_GENRES, SET_FILTERS
} from "../types/movieTypes";

const initialState = {
    movies: [],
    favorites: [],
    favoritesIDS: [],
    pagination: {
        currentPage: 1,
        totalPages: 1,
    },
    filters: {
        sort: '',
        genres: [],
        userScore: [],
    },
    filterOption: {
        genres: []
    },
    search: '',
    loading: true,
};

const movieReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: payload.results,
                pagination: { currentPage: payload.page, totalPages: payload.total_pages }
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
        case SET_SEARCH:
            return {
                ...state,
                search: payload
            };
        case CHANGE_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: payload
                }
            };
        case GET_GENRES:
            return {
                ...state,
                filterOption: {
                    genres: payload
                }
            };
        case SET_FILTERS:
            return {
                ...state,
                filters: {
                    sort: payload.sort,
                    genres: payload.genres,
                    userScore: payload.userScore,
                }
            }
        default:
            return state;
    }
};

export default movieReducer;