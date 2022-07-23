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

const getFailId = () => {
  return { type: Types.GET_ID_FALIURE };
};

    



 const getCar = (params) => (dispatch) => {

  dispatch(getReq());
  axios
    .get("https://enigmatic-stream-23835.herokuapp.com/car", params)
    .then((r) => {
    //   console.log(r.data);
      dispatch(getSucc(r.data));
    })
    .catch((e) => dispatch(getFail(e)))
};
const getCarId=({idd})=>(dispatch)=>{
  // console.log(idd,"pp")
  dispatch(getReqId())
  axios
  .get(`https://enigmatic-stream-23835.herokuapp.com/car/${idd}`)
  .then((r) => {
    // console.log(r.data,"iddata")
  dispatch(getSuccId(r.data));
  })
  .catch((e) => dispatch(getFail(e)));
}





export { getCar ,getCarId};
