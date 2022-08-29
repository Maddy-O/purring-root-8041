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

// ID
const getReqId = () => {
  return { type: Types.GET_ID_REQUEST };
};

const getSuccId = (payload) => {
  return { type: Types.GET_ID_SUCESS, payload };
};

const getCar = (params) => (dispatch) => {
  dispatch(getReq());
  axios
    .get("https://zoomcar-server.herokuapp.com/api/zoomcar", params)
    .then((r) => {
      dispatch(getSucc(r.data));
    })
    .catch((e) => dispatch(getFail(e)));
};
const getCarId =
  ({ idd }) =>
  (dispatch) => {
    dispatch(getReqId());
    axios
      .get(`https://zoomcar-server.herokuapp.com/api/zoomcar/${idd}`)
      .then((r) => {
        dispatch(getSuccId(r.data));
      })
      .catch((e) => dispatch(getFail(e)));
  };

export { getCar, getCarId };
