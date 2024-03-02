import { useState } from "react"
import { useQuery } from "react-query"
import { searchDayCares } from "../../../services/Daycare-details"
import { TChildCare } from "../../Home/type"

const useSearchDayCares = ()=>{
    const  [term, setTerm] = useState<string>()
    const [data, setData] =  useState<TChildCare[] | undefined>()

    
    const  {isLoading} = useQuery([term],()=> searchDayCares(term), {
        staleTime: 10000,
        cacheTime: 10000,
        enabled: term ? true : false,
        onSuccess: (data)=>{
            setData(data)
        }
    })
    return {data,setTerm,isLoading, term, setData}
}

export default useSearchDayCares