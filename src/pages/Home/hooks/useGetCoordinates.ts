import { useState } from "react"
import { useQuery } from "react-query"
import { getCordinates } from "../../../services/Coordinates"
import { TValue } from "../type"


const useGetCoordinates = ()=>{
    const [value, setValue] =  useState<TValue>()

  
    let {data} =  useQuery(["getCordinates", value], ()=> getCordinates(value), {
        enabled: value ? true : false,
        cacheTime: 5000,
        staleTime: 5000
    })


    return {data, setValue}

}

export default useGetCoordinates