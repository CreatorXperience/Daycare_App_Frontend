import { useQuery } from "react-query"
import { useContext, useState } from "react"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage";
import { fetchMessages } from "../../../services/Messages";
import { MessageContext } from "../../../App/App";




const useGetMessages = (
    )=> {
    const [chatId, setChatId] =  useState<string>()
    const message = useContext(MessageContext)

    const {user} =  useGetuserInfoFromStorage()

let {isError, isSuccess,isFetching, refetch}= useQuery(["messages", chatId],() =>  fetchMessages({token: user?.token, chatId: chatId}), {
    enabled: !!chatId,
    cacheTime: 30000,
    staleTime: 30000,
    refetchOnWindowFocus: false,
    onSuccess: (data)=> {
        if(message){
            message.setMesssages(data)
        }
    },
    isDataEqual(oldData, newData) {
        if(oldData === newData){
            return true
        }
        return false
    },
}) 

return {isError,isSuccess, setChatId,isFetching, refetch}
}

export default useGetMessages