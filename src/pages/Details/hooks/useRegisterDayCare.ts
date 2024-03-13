import { useState } from "react"
import { useMutation } from "react-query"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"


type TRegisterPayload = {
daycareId: string,
token?: string,
setErrorResponse: React.Dispatch<React.SetStateAction<undefined>>
}
const useRegister =()=>{
    const [response, setResponse] = useState()
    const [error, setErrorResponse] =  useState()
    const {user} =  useGetuserInfoFromStorage()

    const registerDaycare = async (data: TRegisterPayload)=>{
    
        try{
            let response = await axiosInstance.post(`${ENDPOINT.register}/${data.daycareId}`, {}, {
                headers: {
                    authorization: data.token
                }
            })
            return response.data 
        }
        catch(e:any){
            data.setErrorResponse(e.response.data)
        }

}
    const {data, mutate, isLoading, isError, isSuccess} =  useMutation("create-chats", registerDaycare)

    const mutateChat = (daycareId?: string)=>{
        if(daycareId)
        mutate({daycareId, setErrorResponse, token:  user?.token}, {
            onSuccess: (data)=>{
            setResponse(data)
        }})
    }
        const handleCreateChat = (id?: string)=>{
        mutateChat(id)
    }
    return {data, isLoading, isError, response, isSuccess, handleCreateChat,error, mutateChat}
}

export default useRegister