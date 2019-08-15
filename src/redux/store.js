import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./userReducer";
import billsReducer from "./billsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  bills: billsReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
