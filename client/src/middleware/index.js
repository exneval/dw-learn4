import { ADD_ARTICLE } from "../constants/action-types";

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const forbiddenWords = ["corona", "covid19"];
        const foundWord = forbiddenWords.filter((word) =>
          action.payload.title.toLowerCase().includes(word)
        );

        if (foundWord.length) return dispatch({ type: "FOUND_BAD_WORD" });
      }
      return next(action);
    };
  };
};
