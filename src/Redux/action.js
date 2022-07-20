import axios from "axios"
import * as Types from "./actionTypes"

const getReq=()=>{
    return{
        type:Types.GET_CAR_REQUEST
    }
}
const getSucc=(payload)=>{
    return{
        type:Types.GET_CAR_SUCESS,
        payload

    }
}
const getFail=()=>{
    return{
        type:Types.GET_CAR_FALIURE,
    

    }
}






//thunk FUNCTON

export const getCar=()=>(dispatch)=>{
    const req=getReq();
    dispatch(req)

     return axios.get("http://localhost:8080/zoomcar").then((res)=>{
        // console.log(res.data,"ddssdad")
        // const sucess = getSucc(res.data)
        dispatch(getSucc(res.data))
    }).then((err)=>{
        const fail=getFail();
        dispatch(fail)
    })

}

