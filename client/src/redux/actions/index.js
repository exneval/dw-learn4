import { DATA_LOADED } from "../../constants/action-types";
import axios from "axios";

export const getData = () => {
  return {
    type: DATA_LOADED,
    payload: async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) return data.error.message;
        }
      }
    },
  };
};
