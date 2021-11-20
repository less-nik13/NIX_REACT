import { instance } from "../../utils/axios.config";
import {
    ADD_TODO_FAILURE,
    ADD_TODO_SUCCESS,
    COMPLETE_TODO,
    DELETE_TODO,
    GET_TODOS,
    UPDATE_TODO,
    LOADING_TODOS_STARTED
} from "../types/todo";
import { setAlert } from "./alert";

export const getTodos = () => async (dispatch) => {
    try {
        const url = '/todos';
        const token = localStorage.getItem('token');
        const response = await instance(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const { todos } = response.data;

        if(response.statusText) {
            dispatch({ type: GET_TODOS, payload: todos });
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const addTodo = (todo) => async dispatch => {
    try {
        const url = '/todos';
        const token = localStorage.getItem('token');
        const response = await instance.post(url, { ...todo }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        dispatch(loadingTodos());

        if(response.statusText) {
            const { todo, message } = response.data;
            dispatch({ type: ADD_TODO_SUCCESS, payload: todo });
            dispatch(setAlert(message, 'success'));
        }
    } catch(error) {
        dispatch({ type: ADD_TODO_FAILURE });
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const setTodoCompleted = (id) => async dispatch => {
    try {
        const url = `/todos/${id}`;
        const token = localStorage.getItem('token');
        const response = await instance.put(url, { completed: true }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const { updatedTodo, message } = response.data;

        dispatch({ type: COMPLETE_TODO, payload: updatedTodo });
        dispatch(setAlert(message, 'success'));
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const updateSelectedTodo = (id, todo) => async dispatch => {
    try {
        const url = `/todos/${id}`;
        const token = localStorage.getItem('token');
        const response = await instance.put(url, { ...todo }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if(response.statusText) {
            const { updatedTodo, message } = response.data;

            dispatch({ type: UPDATE_TODO, payload: updatedTodo });
            dispatch(setAlert(message, 'success'));
        }
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const deleteTodo = (id) => async dispatch => {
    try {
        const url = `/todos/${id}`;
        const token = localStorage.getItem('token');
        const response = await instance.delete(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const { message } = response.data;

        dispatch({ type: DELETE_TODO, payload: id });
        dispatch(setAlert(message, 'success'));
    } catch(error) {
        dispatch(setAlert(error.response.data.message, 'error', 4000));
    }
};

export const loadingTodos = () => {
    return {
        type: LOADING_TODOS_STARTED
    };
};