import { combineReducers } from "redux";

import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    todo: todoReducer
});

export default rootReducer;
