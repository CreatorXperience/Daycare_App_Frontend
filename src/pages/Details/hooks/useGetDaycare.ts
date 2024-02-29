import { useState } from "react"
import { useQuery } from "react-query"
import { fetchDaycare } from "../../../services/Daycare-details"

const useGetDayCare = ()=>{
    const [id, setId]= useState<string>()

      let {data, isLoading} = useQuery([id],()=> fetchDaycare(id), {
        enabled: id ? true: false,
    })
    return {data, isLoading, setId}
}

export default useGetDayCare