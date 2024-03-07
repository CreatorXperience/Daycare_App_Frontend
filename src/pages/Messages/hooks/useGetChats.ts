import { useState } from "react"
import { useQuery } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"


type TError = {
    members: null,
    error:any
}

type TChats = {
    chat: {
        createdAt: string,
        updatedAt: string,
        members: [string, string], 
        _id: string
    }[]
}
const useGetChat = ()=>{
    const [error, setError] = useState<TError[]>()
    
    const getChat = async ()=> {
        let userInfo  = localStorage.getItem("DayCareuserLoginInfo")
        if(userInfo){
            let parsedInfo =  JSON.parse(userInfo)
    
        try{
            let response = await axiosInstance.get(`${ENDPOINT.chats}/allchats`,{
                headers: { 
                    'Content-Type': 'application/json',       
                    'Authorization': parsedInfo.token
                }
            })
            return  response.data as TChats
        }catch(e:any){
            let error = [{members: null, error: e}]
            setError(error)
        }
    }
    }

    const  {data, isError, isLoading,refetch} = useQuery("get-users",getChat, {
        staleTime:20000,
        cacheTime: 20000, refetchOnWindowFocus: true,
    })

    return {data, isError, isLoading, refetch}
}

export default useGetChat