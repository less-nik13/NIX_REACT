import { combineReducers } from "redux";

import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
// import filmsReducer from "./filmsReducer";

const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    // films: filmsReducer
});

export default rootReducer;
