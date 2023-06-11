import { ADD_DETAILS_FAILURE, ADD_DETAILS_REQUEST, ADD_DETAILS_SUCCESS, DELETE_DETAILS_FAILURE, DELETE_DETAILS_REQUEST, DELETE_DETAILS_SUCCESS, GET_NAME_FAILURE, GET_NAME_REQUEST, GET_NAME_SUCCESS } from "./actionsTypes"
import axios from 'axios'

//get data start here ------
const get_name_req=()=>{
    return{
        type:GET_NAME_REQUEST
    }
}

const get_name_success=(payload)=>{
    return {
        type: GET_NAME_SUCCESS,
        payload
    }
}

const get_name_fail=()=>{
    return{
        type: GET_NAME_FAILURE
    }
}

export const getDatas=()=>(dispatch)=>{
    dispatch(get_name_req())
    axios.get(`https://json-server-api-qel0.onrender.com/names`)
    .then((res)=>dispatch(get_name_success(res.data)))
    .catch((err)=>dispatch(get_name_fail(err)))
}

//get data end here------

//add Details start here---
const addDetailsReq=()=>{
    return{
        type: ADD_DETAILS_REQUEST
    }
}
const addDetailsSuccess=(payload)=>{
    return{
        type:ADD_DETAILS_SUCCESS,
        payload
    }
}
const addDetailsFail=()=>{
    return{
        type: ADD_DETAILS_FAILURE
    }
}

export const addDetails=(payload)=>(dispatch)=>{
    dispatch(addDetailsReq())
    axios.post(`https://json-server-api-qel0.onrender.com/names`,payload)
    .then((res)=>dispatch(addDetailsSuccess(res.data)))
    .catch((err)=>dispatch(addDetailsFail(err)))
}
//add Details end here------


//delete details start here

const deleteReq=()=>{
    return{
        type:DELETE_DETAILS_REQUEST
    }
}
const deleteSuccess=(payload)=>{
    return{
        type:DELETE_DETAILS_SUCCESS,
        payload
    }
}
const deleteFail=()=>{
    return{
        type:DELETE_DETAILS_FAILURE
    }
}

export const deleteDetails=(id)=>(dispatch)=>{
    
      dispatch(deleteReq())
      axios.delete(`https://json-server-api-qel0.onrender.com/names/${id}`)
      .then((res)=>dispatch(deleteSuccess(id)))
      .catch((err)=>dispatch(deleteFail(err)))
}