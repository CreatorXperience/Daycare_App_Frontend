import {  useQuery } from "react-query"
import { useState } from "react"
import { TCoordinates } from "../type"
import { getDayCares } from "../../../services/Daycare-details"




const useGetDaycares = ()=>{
    const  [coordinates, setCoordinates] = useState<TCoordinates>()

    
    const  {data, isLoading} = useQuery([coordinates?.long, coordinates?.lat],()=> getDayCares(coordinates?.long as number, coordinates?.lat as number), {
        staleTime: 30000,
        cacheTime: 30000,
        enabled: coordinates ? true : false
    })
    return {data, setCoordinates, coordinates, isLoading}
}

export default useGetDaycares