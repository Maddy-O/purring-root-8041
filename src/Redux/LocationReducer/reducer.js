import * as types from "./action.types";

const initialState = {
  location: [],
  isLoading: false,
  isError: false,
  currLocation: [],
  pickUpLoc: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //-----------------Countries------------------------------
    case types.GET_LOCATION_REQU:
      return { ...state, isLoading: true, isError: false };
    case types.GET_LOCATION_SUCC:
      return { ...state, location: payload, isLoading: false, isError: false };
    case types.GET_LOCATION_FAIL:
      return { ...state, isLoading: false, isError: true };
    //--------------------Current Loction --------------------------
    case types.GET_USER_LOC_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_USER_LOC_SUCCESS:
      return {
        ...state,
        currLocation: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_USER_LOC_FAILURE:
      return { ...state, isLoading: false, isError: true };
    //--------------------PickUp Loction --------------------------
    case types.GET_USER_PICKUP_LOC_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_USER_PICKUP_LOC_SUCCESS:
      return {
        ...state,
        pickUpLoc: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_USER_PICKUP_LOC_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
