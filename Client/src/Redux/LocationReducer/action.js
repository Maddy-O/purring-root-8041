import * as types from "./action.types";
import axios from "axios";

const getLocation = (params) => (dispatch) => {
  dispatch({ type: types.GET_LOCATION_REQU });
  axios
    .get("https://zoomcar-server.herokuapp.com/api/location", params)
    .then((res) => {
      dispatch({ type: types.GET_LOCATION_SUCC, payload: res.data });
      return types.GET_LOCATION_SUCC;
    })
    .catch((e) => {
      dispatch({ type: types.GET_LOCATION_FAIL, payload: e });
      return types.GET_LOCATION_FAIL;
    });
};

export { getLocation };
