import { ENDPOINT } from "../../../constants/endpoints"
import { TLoginResponse } from "../../../pages/Auth/Login/type"

import type { TResponse, TUserPayload } from "../../../pages/Auth/Signup/hooks/type"
import axiosInstance from "../axiosInstance"



const fetchUser = async (userPayload: TUserPayload)=>{
    try{
 let response = await axiosInstance.post(`${ENDPOINT.signup}`, userPayload)
 console.log(response.data)
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
 console.log(response.data)
return response.data as TLoginResponse
    }
    catch(e: any){
return e.response.data  as TLoginResponse
    }

}

export  {fetchUser, loginUser}
