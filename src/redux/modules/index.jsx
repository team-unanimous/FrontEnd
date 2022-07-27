import { combineReducers } from "redux";
import postReducer from "./post";
import meetReducer from "./meetReducer";
import userReducer from "./user";
import teamReducer from "./teamReducer"


const rootReducer = combineReducers({
    postReducer,
    meetReducer,
    userReducer,
    teamReducer,
})

export default rootReducer;