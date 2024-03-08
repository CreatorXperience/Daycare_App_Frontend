import { useState } from "react"
import { useQuery } from "react-query"
import { TError } from "../type"
import { getChat } from "../../../services/Chat"


const useGetChat = ()=>{
    const [error, setError] = useState<TError[]>()
    
    const  {data, isError, isLoading,refetch} = useQuery("get-users",() => getChat(setError), {
        staleTime:20000,
        cacheTime: 20000, refetchOnWindowFocus: true,
    })

    return {data, isError, isLoading, refetch,error}
}

export default useGetChat