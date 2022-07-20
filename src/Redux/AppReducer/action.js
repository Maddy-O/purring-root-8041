import * as Types from "./action.types";
import axios from "axios";

const getReq = () => {
  return { type: Types.GET_CAR_REQUEST };
};

const getSucc = (payload) => {
  return { type: Types.GET_CAR_SUCCESS, payload };
};

const getFail = () => {
  return { type: Types.GET_CAR_FALIURE };
};

const getCar = (params) => (dispatch) => {
  dispatch(getReq());
  axios
    .get("http://localhost:8080/zoomcar", params)
    .then((r) => {
    //   console.log(r.data);
      dispatch(getSucc(r.data));
    })
    .catch((e) => dispatch(getFail(e)));
};

export { getCar };
