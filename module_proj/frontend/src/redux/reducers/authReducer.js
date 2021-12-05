import { LOGIN_SUCCESS, LOGOUT } from "../types/authTypes";

const initialState = {
    currentUser: null,
    isAuthenticated: false
};

const authReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: payload
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;