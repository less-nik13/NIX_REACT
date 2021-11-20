import { LOGIN_SUCCESS, LOGOUT, SET_USER } from "../types/auth";

const initialState = {
    currentUser: null,
    isAuthenticated: false
};

const authReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            };
        case SET_USER:
            return {
                ...state, currentUser: payload.user
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;