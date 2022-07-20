import * as types from "./action.types";
import axios from "axios";

//--------------------------GET Location--------------------------

const getLocReq = () => {
  return { type: types.GET_LOCATION_REQU };
};

const getLocSuc = (payload) => {
  return { type: types.GET_LOCATION_SUCC, payload };
};

const getLocFail = () => {
  return { type: types.GET_LOCATION_FAIL };
};

const getLocation = (params) => (dispatch) => {
  dispatch(getLocReq());
  axios
    .get("http://localhost:8080/location", params)
    .then((r) => dispatch(getLocSuc(r.data)))
    .catch((e) => dispatch(getLocFail(e)));
};

//----------------------------Add location------------------------
const addUserLocationRequest = (payload) => {
  return {
    type: types.ADD_USER_LOC_REQUEST,
    payload,
  };
};
const addUserLocationSuccess = (payload) => {
  return {
    type: types.ADD_USER_LOC_SUCCESS,
    payload,
  };
};
const addUserLocationFailure = (payload) => {
  return {
    type: types.ADD_USER_LOC_FAILURE,
    payload,
  };
};

const addUserLocation = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(addUserLocationRequest());
  axios
    .post("http://localhost:8080/user-location", payload)
    .then((response) => dispatch(addUserLocationSuccess(response.data)))
    .catch((response) => dispatch(addUserLocationFailure(response.data)));
};
export { getLocation, addUserLocation };