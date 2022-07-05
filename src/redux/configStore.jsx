import { createStore, applyMiddleware } from "redux";
import rootReducer from './modules/index'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, enhancer);
export default store;