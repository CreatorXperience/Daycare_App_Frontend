import { useState } from "react"
import { useMutation } from "react-query"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { registerDaycare } from "../../../services/Daycare-details"
import { TRegisteredPayload } from "../type"



const useRegister =()=>{
    const [response, setResponse] = useState<TRegisteredPayload>()
    const [error, setErrorResponse] =  useState()
    const {user} =  useGetuserInfoFromStorage()

    
    const {data, mutate, isLoading, isError, isSuccess} =  useMutation("Register", registerDaycare)

    const mutateRegister = (daycareId?: string)=>{
        if(daycareId)
        mutate({daycareId, setErrorResponse, token:  user?.token}, {
            onSuccess: (data)=>{
            setResponse(data)
        }})
    }
        const handleCreateChat = (id?: string)=>{
        mutateRegister(id)
    }
    return {data, isLoading, isError, response, isSuccess, handleCreateChat,error, mutateRegister}
}

export default useRegister