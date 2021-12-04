import { combineReducers } from "redux";

import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    movie: movieReducer
});

export default rootReducer;
