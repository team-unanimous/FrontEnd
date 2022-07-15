import { combineReducers } from "redux";
import postReducer from "./post";
import meetReducer from "./meetReducer";
import userReducer from "./user"

const rootReducer = combineReducers({
    postReducer,
    meetReducer,
    userReducer,
})

export default rootReducer;