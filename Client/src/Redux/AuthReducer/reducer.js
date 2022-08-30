import { getLocalData, setLocalData } from "../../Components/localStorage";
import * as types from "./action.types";

const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  details: [],
  message: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //-----------------------REGISTER------------------------------------
    case types.REGISTER_USER_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.REGISTER_USER_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case types.REGISTER_USER_FAILURE:
      return { ...state, isLoading: false, message: payload, isError: true };
    //-----------------------LOGIN------------------------------------
    case types.LOGIN_USER_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.LOGIN_USER_SUCCESS:
      setLocalData("token", payload.token);
      const { name } = payload.user;
      setLocalData("user", name);
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        details: payload.user,
        isLoading: false,
        isError: false,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        details: [],
        message: payload,
        isLoading: false,
        isError: true,
      };
    //-----------------------LOGOUT------------------------------------
    case types.LOGOUT_USER_SUCCESS:
      setLocalData("token", "");
      setLocalData("user", "");
      return {
        ...state,
        isAuth: false,
        token: "",
        details: [],
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export { reducer };
