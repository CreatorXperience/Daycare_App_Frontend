import { useMutation, useQuery } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { TChildCare, TCoordinates } from "../../../pages/Home/type"
import { useState } from "react"
import { TLoginResponse } from "../../../pages/Auth/Login/type"
import axios from "axios"


type TData = {
lat: number,
lon:number
}

type TError = {
    response: {
        message: string
    }
}

type TCoord = {
    lat: number,
    lon:  number
}
const useFilter = ()=>{
    const [error, setError] = useState<TError>()
    const [coord, setCoord] = useState<TCoord>()

    let filter = async (data?: TData)=>{
        if(data){
            try{
                let response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${process.env.REACT_APP_GEOCODING_API}&lat=${data.lat}&lon=${data.lon}&format=json`)
                console.log(response)
                return response.data as TChildCare[] 
        }
        catch(e:any){
            console.log(error)
        }
        }
    }
    const {data, isLoading} = useQuery([coord?.lat, coord?.lon], ()=> filter(coord), {
        enabled: coord ? true: false,
        cacheTime: 30000,
        staleTime: 30000 
    })


    console.log(data)
    return {error, setError, isLoading, setCoord, data}
}

export default useFilter