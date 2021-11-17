import { SET_ALERT, REMOVE_ALERT } from "../types/alert";

const initialState = {
    alert: [],
    type: "",
    showAlert: false
};

const alertReducer = (state = initialState, { payload, type }) => {
    switch(type) {
        case SET_ALERT:
            return {
                ...payload,
                showAlert: true,
            };
        case REMOVE_ALERT:
            return initialState;
        default:
            return state;
    }
};

export default alertReducer;