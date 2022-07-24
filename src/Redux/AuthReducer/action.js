import * as types from "./action.types";

const signup = (payload) => (dispatch) => {
//   console.log(payload);
//   dispatch({ type: types.SIGNUP_REQUEST });
  localStorage.setItem("Logininfo", JSON.stringify(payload));
  dispatch({ type: types.SIGNUP_SUCCESS, payload });
//   dispatch({ type: types.SIGNUP_FAILURE });
};

export { signup };
