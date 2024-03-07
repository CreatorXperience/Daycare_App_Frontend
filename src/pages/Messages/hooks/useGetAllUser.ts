import { useState } from "react"
import TIds from "../type"
import { useQueries } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"

const useGetAllUser = ()=>{
    const [chatId, setChatIds] = useState<Array<TIds>>([])


const fetchAllChats = async(id: string)=>{
    if(id)
    try{
       let response =  await axiosInstance.get(`${ENDPOINT.users}/${id}`)
        return response.data
    }
    catch(e){
        return e
    }
}

    const results = useQueries(chatId.map((id)=>{
        
        return {queryKey: ["chat", id], queryFn: () => "fetchAllChats(id)", enabled: !!chatId}
    }))

    let response = results.map((data)=>{
      return  data.data
    })

    return {response, setChatIds}
}