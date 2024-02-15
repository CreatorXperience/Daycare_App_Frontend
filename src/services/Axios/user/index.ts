import { ENDPOINT } from "../../../constants/endpoints"
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

export  {fetchUser}
