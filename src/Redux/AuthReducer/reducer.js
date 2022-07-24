import * as types from "./action.types";

const initialState = {
  isAuth: false,
  token: "",
  detait: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // case types.SIGNUP_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        detait: payload,
        isError: false,
      };
    // case types.SIGNUP_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isAuth: false,
    //     isError: true,
    //   };
    default:
      return state;
  }
};

export { reducer };
