import * as Types from "./actionTypes";

const initState={
    car:[],
    isLoading:false,
    isError:false,
    filterData:[]
}
export const reducer=(state=initState,action)=>{
    switch(action.type)
    {
        case Types.GET_CAR_REQUEST:{
            return{
                ...state,
                isLoading:true
            }

        }
        case Types.GET_CAR_SUCESS:{
            return{
                ...state,
                car:action.payload,
                isLoading:false,
                
            }

        }
        case Types.GET_CAR_FALIURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }

        }
      
      

      
        default:
            return state
    }
}