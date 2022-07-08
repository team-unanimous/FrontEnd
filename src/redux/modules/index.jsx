import { combineReducers } from "redux";
import postReducer from "./post";
import meetReducer from "./meetReducer";

const rootReducer = combineReducers({
    postReducer,
    meetReducer
})

export default rootReducer;