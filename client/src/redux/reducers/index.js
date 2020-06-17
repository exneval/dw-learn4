import { DATA_LOADED } from "../../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const DATA_LOADED_PENDING = `${DATA_LOADED}_${ActionType.Pending}`;
const DATA_LOADED_FULFILLED = `${DATA_LOADED}_${ActionType.Fulfilled}`;
const DATA_LOADED_REJECTED = `${DATA_LOADED}_${ActionType.Rejected}`;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADED_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DATA_LOADED_FULFILLED:
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload),
      };
    case DATA_LOADED_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
