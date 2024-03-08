import { useState } from "react"
import { useMutation } from "react-query"
import { TCreatedChatResponse } from "../types"
import {createChat}from "../../../services/Chat"



const useCreateChat  =  ()=>{
    const [response, setResponse] = useState<TCreatedChatResponse>()
    const [error, setErrorResponse] =  useState()

    const {data, mutate, isLoading, isError, isSuccess} =  useMutation("create-chats", createChat)


    const mutateChat = (userId?: string)=>{
        if(userId)
        mutate({id: userId, setErrorResponse}, {
            onSuccess: (data)=>{
            setResponse(data)
        }})
    }
        const handleCreateChat = (id?: string)=>{
        mutateChat(id)
    }
    return {data, isLoading, isError, response, isSuccess, handleCreateChat}
}

export default useCreateChat