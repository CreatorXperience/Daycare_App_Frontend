import { useState } from "react"
import { useQuery } from "react-query"
import { searchDayCares } from "../../../services/Daycare-details"

const useSearchDayCares = ()=>{
    const  [term, setTerm] = useState<string>()

    
    const  {data, isLoading} = useQuery([term],()=> searchDayCares(term), {
        staleTime: 10000,
        cacheTime: 10000,
        enabled: term ? true : false
    })
    return {data,setTerm,isLoading}
}

export default useSearchDayCares