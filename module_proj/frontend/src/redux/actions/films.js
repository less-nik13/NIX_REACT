import { GET_FILMS, LOADING_FILMS_FINISHED, LOADING_FILMS_STARTED } from "../types/films";
import { setAlert } from "./alert";
import { GET_MOVIES } from "../../api/api-client";
import { apiInstance } from "../../api/axios.config";

export const getFilms = (options) => async (dispatch) => {
    try {
        const response = await apiInstance.get(GET_MOVIES, {
            params: {
                ...options
            }
        });
        const filmsData = response.data;

        dispatch({type: LOADING_FILMS_STARTED})

        if(response.status === 200) {
            dispatch({type: LOADING_FILMS_FINISHED})
            dispatch({ type: GET_FILMS, payload: filmsData });
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

// export const loadingTodos = () => {
//     return {
//         type: LOADING_TODOS_STARTED
//     };
// };

// export const selectPage = () => {
//     return {
//         type:
//     }
// }