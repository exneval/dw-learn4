import { INC_COUNTER, DEC_COUNTER } from "../../constants/action-types";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
    case DEC_COUNTER:
      return {
        counter: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
