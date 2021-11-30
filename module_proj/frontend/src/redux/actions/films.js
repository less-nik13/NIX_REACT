import axios from "axios";
import { GET_FILMS } from "../types/films";
import { setAlert } from "./alert";
import { GET_MOVIES } from "../../api/api-client";

export const getFilms = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(GET_MOVIES, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const { todos } = response.data;

        if(response.statusText) {
            dispatch({ type: GET_FILMS, payload: todos });
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