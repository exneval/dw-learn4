import { createStore, combineReducers } from "redux";
import rootReducer from "../reducers";
import counterReducer from "../reducers/counter";

const reducers = combineReducers({
  number: counterReducer,
  root: rootReducer,
});

const store = createStore(reducers);

export default store;
