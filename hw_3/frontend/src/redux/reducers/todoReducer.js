import {
    ADD_TODO_FAILURE,
    ADD_TODO_SUCCESS,
    COMPLETE_TODO,
    GET_TODOS,
    DELETE_TODO,
    LOADING_TODOS_STARTED, UPDATE_TODO
} from "../types/todo";

const initialState = {
    todos: null,
    loading: true,
};

const todoReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_TODOS:
            return {
                todos: payload, loading: false
            };
        case LOADING_TODOS_STARTED:
            return {
                ...state,
                loading: true
            };
        case COMPLETE_TODO:
            return {
                ...state, todos: [ ...state.todos.filter((todo) => todo.id !== payload.id), payload ]
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: [ payload, ...state.todos ]
            };
        case DELETE_TODO:
            return {
                ...state, todos: [ ...state.todos.filter((todo) => todo.id !== payload) ]
            };
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case UPDATE_TODO: {
            const index = state.todos.findIndex(todo => todo.id === payload.id);

            return {
                ...state, todos: [
                    ...state.todos.slice(0, index), // everything before current todo
                    {
                        ...state.todos[index],
                        ...payload,
                    },
                    ...state.todos.slice(index + 1), // everything after current todo
                ]
            };
        }
        default:
            return state;
    }
};

export default todoReducer;