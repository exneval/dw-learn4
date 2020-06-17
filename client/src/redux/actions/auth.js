import { REGISTER, LOGIN } from "../../constants/action-types";
import { API, setAuthToken } from "../../config/api";

export const register = (user) => {
  return {
    type: REGISTER,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/register", user);

        localStorage.setItem("token", data.token);
        setAuthToken(data.token); //Set header token

        const {
          data: { data: dataUser },
        } = await API.get("/user");
        return dataUser;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const login = (user) => {
  return {
    type: LOGIN,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/login", user);

        localStorage.setItem("token", data.token);
        setAuthToken(data.token); //Set header token

        const {
          data: { data: dataUser },
        } = await API.get("/user");
        return dataUser;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};
