import { INC_COUNTER, DEC_COUNTER } from "../../constants/action-types";

export const addCounter = (counter) => {
  return { type: INC_COUNTER, payload: counter + 1 };
};

export const subCounter = (counter) => {
  return { type: DEC_COUNTER, payload: counter - 1 };
};
