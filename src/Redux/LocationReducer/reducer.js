import * as types from "./action.types";

const initialState = {
  location: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LOCATION_REQU:
      return { ...state, isLoading: true, isError: false };
    case types.GET_LOCATION_SUCC:
      return { ...state, location: payload, isLoading: false, isError: false };
    case types.GET_LOCATION_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
