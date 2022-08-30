import * as Types from "./action.types";

const initState = {
  car: [],
  isLoading: false,
  isError: false,
  filterData: [],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_CAR_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case Types.GET_CAR_SUCCESS: {
      return { ...state, car: payload, isLoading: false, isError: false };
    }
    case Types.GET_CAR_FALIURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case Types.GET_ID_REQUEST:{
      return{
        ...state,isLoading:true,isError:false
      }
    }
    case Types.GET_ID_SUCESS:{
      return{
        ...state,
        filterData:action.payload
      }
    }
    default:
      return state;
  }
};

export { reducer };
