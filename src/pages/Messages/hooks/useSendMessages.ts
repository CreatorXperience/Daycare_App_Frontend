import { useMutation } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { useState } from "react"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { TChatPayload, TMessagePayload } from "../type"





const useSendMessages = ()=>{
    const [messageResponse, setMessageResponse] =  useState()
    let user = useGetuserInfoFromStorage()

    const postMessage = async(payload: TMessagePayload)=> {
    if(payload.token){
        try{
            
            let response =  await axiosInstance.post(`${ENDPOINT.message}`,payload, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": payload.token
                }
                })
                
                
                return response.data
            }
            catch(e){
            console.log(e)
            }
        }  
    }
    const  {isError, isLoading, mutate} =  useMutation("messages",  postMessage)
    
    const mutateMessage = (message: TChatPayload)=>{
        mutate({payload: {...message}, token: user.user?.token}, {
            onError: ()=>{
                console.log("an error occured while saving message")
            },
    
            onSuccess: (data)=> {
                setMessageResponse(data)
            }
        })
    }
    
    return {isError,isLoading, mutateMessage}
}

export default useSendMessages