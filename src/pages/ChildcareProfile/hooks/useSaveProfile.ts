import { useState } from "react"
import { TChildCare } from "../../Home/type"
import { useMutation } from "react-query"
import { TChild, TExtendChildcare } from "../type"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { TLoginResponse } from "../../Auth/Login/type"


const useSaveProfile = ()=> {
    const [response, setResponse] =  useState<TChildCare>()
    const [errorResponse, setErrorResponse] =  useState<{message: any} | null>()

    const saveProfile = async (userPayload: Partial<TExtendChildcare<TChild & {location:string},"_id">>)=>{
     try{
        const  user = localStorage.getItem("DayCareuserLoginInfo")
        if(user){
            let parseUser = JSON.parse(user) as TLoginResponse
            if(parseUser.message.day_care_owner){
                let response = await axiosInstance.patch(`${ENDPOINT.getChildCares}`, userPayload, {
                    headers: {
                        authorization: parseUser.token
                    }
                })
                return {...response.data} as TChildCare
            }
            let response = await axiosInstance.post(`${ENDPOINT.createProfile}`, userPayload, {
                headers: {
                    authorization: parseUser.token
                }
            })
            return {...response.data} as TChildCare
        }
        }
        catch(e: any){
            let errorObj = {...e.response.data, status: "404"}
            setErrorResponse(errorObj)
        }
    }
    const {mutate, isLoading, isSuccess} =  useMutation("upload-profile",  saveProfile)

    const mutateProfile = (userPayload: Partial<TExtendChildcare<TChild & {location:string},"_id">>)=> {
    mutate(userPayload, {
        onSuccess: (data)=>{
             setResponse(data)
             return setErrorResponse(null)
        }
    })
}

return {response, mutateProfile,errorResponse, isLoading, isSuccess}
}
export default useSaveProfile