import { useState } from "react"
import { useQuery } from "react-query"
import axios from "axios"

type TValue = {city: string, country: string}
type TCordinates = {longitude: number, latitude: number}

const useGetCoordinates = ()=>{
    const [value, setValue] =  useState<TValue>()

    const getCordinates = async (value: TValue | undefined)=>{
        if(value)
        try{

            let response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${value.city}&country=${value.country}`, {
                headers: {
                    "X-Api-Key": process.env.REACT_APP_API_KEY
                }
            })
            
            return response.data as TCordinates[]
        }
        catch(e){
            console.log(e)
        }


}
    let {data} =  useQuery(["getCordinates", value], ()=> getCordinates(value), {
        enabled: value ? true : false,
        cacheTime: 5000,
        staleTime: 5000
    })

    return {data, setValue}

}

export default useGetCoordinates