import { ENDPOINT } from "../../constants/endpoints"
import { TLoginResponse } from "../../pages/Auth/Login/type"

import type { TResponse, TUserPayload } from "../../pages/Auth/Signup/type"
import axiosInstance from "../Axios/axiosInstance"



const registerUser = async (userPayload: TUserPayload)=>{
    try{
 let response = await axiosInstance.post(`${ENDPOINT.signup}`, userPayload)
return response.data as TResponse 
    }
    catch(e: any){
return e.response.data 
    }

}

const loginUser = async (userPayload: Omit<TUserPayload, "fullname">)=>{
    try{
        let  existingUser  = {email: userPayload.email, password: userPayload.password}
 let response = await axiosInstance.post(`${ENDPOINT.login}`, existingUser)
 let  res = {...response.data, token: response.headers.authorization }
return res as TLoginResponse
    }
    catch(e: any){
        let errorObj = {...e.response.data, status: "404"}
return errorObj  as TLoginResponse
    }

}

export  {registerUser , loginUser}
