import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import CombineReducer from "./index"

const initialState = {};

const middleware = [thunk];

const store = createStore(
  CombineReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;