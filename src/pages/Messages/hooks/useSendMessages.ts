import { useMutation } from "react-query"
import { useState } from "react"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { TChatPayload } from "../type"
import { postMessage } from "../../../services/Messages"



const useSendMessages = ()=>{
    const [messageResponse, setMessageResponse] =  useState()
    const [errorResponse, setErrorResponse] =  useState("")
    let user = useGetuserInfoFromStorage()

    const  {isError, isLoading, mutate} =  useMutation("messages",  postMessage)
    
    const mutateMessage = (message: TChatPayload)=>{

        mutate({payload: {...message}, token: user.user?.token}, {
            onError: ()=>{
                console.log("an error occured while saving message")
                setErrorResponse("an error occured while saving message")
            },
    
            onSuccess: (data)=> {
                setMessageResponse(data)
            }
        })
    }
    
    return {isError,isLoading, mutateMessage, messageResponse,errorResponse}
}

export default useSendMessages