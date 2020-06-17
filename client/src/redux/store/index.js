import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import counterReducer from "../reducers/counter";
import authReducer from "../reducers/auth";
import { forbiddenWordsMiddleware } from "../../middleware";
import promise from "redux-promise-middleware";

// Global state
const reducers = combineReducers({
  number: counterReducer,
  root: rootReducer,
  auth: authReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, promise))
);

export default store;
