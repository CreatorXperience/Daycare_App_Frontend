import {  useQuery } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { useState } from "react"
import { ENDPOINT } from "../../../constants/endpoints"
import { TLoginResponse } from "../../Auth/Login/type"
import { TChildCare, TCoordinates } from "../type"
import { getDayCares } from "../../../services/Daycare-details"




const useGetDaycares = ()=>{
    const  [coordinates, setCoordinates] = useState<TCoordinates>()

    
    const  {data, isLoading} = useQuery([coordinates?.long, coordinates?.lat],()=> getDayCares(coordinates?.long as number, coordinates?.lat as number), {
        staleTime: 5000,
        cacheTime: 5000,
        enabled: coordinates ? true : false
    })
    return {data, setCoordinates, coordinates, isLoading}
}

export default useGetDaycares