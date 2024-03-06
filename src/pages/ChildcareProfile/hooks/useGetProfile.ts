import { useState, useTransition } from "react"
import { useQuery } from "react-query"
import { getDaycareProfile } from "../../../services/Daycare-details"
import { TChildCare } from "../../Home/type"

const useGetProfile = ()=>{
    const [id, setId]= useState<string>()
    const [data, setData] =  useState<TChildCare | undefined>()
    const [isPending, startTransition] =  useTransition()

      let {isLoading} = useQuery([id],()=> getDaycareProfile(id), {
        enabled: id ? true: false,
        staleTime: 30000,
        cacheTime: 30000,
        refetchOnMount:false,
        refetchIntervalInBackground: true,
        refetchOnWindowFocus: false,
        onSuccess: (data)=>{
            startTransition(()=>{
                setData(data)
            })
        }
    })
    return {data, isLoading, setId, isPending}
}

export default useGetProfile