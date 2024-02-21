import {  useQuery } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { useState } from "react"
import { ENDPOINT } from "../../../constants/endpoints"
import { TLoginResponse } from "../../Auth/Login/type"
import { TChildCare, TCoordinates } from "../type"




const useGetDaycares = ()=>{
    const  [coordinates, setCoordinates] = useState<TCoordinates>()

    

    const getDayCares = async (long:number, lat:number)=>{

        let user =  localStorage.getItem("DayCareuserLoginInfo")
        if(user && long && lat){ 
            try{

                let parsedUserObj = JSON.parse(user) as TLoginResponse
             
                    let  response = await axiosInstance.get(`${ENDPOINT.getChildCares}/${long}/${lat}`, {
                        headers: {
                    authorization: parsedUserObj.token
                }
             })
             return response.data as TChildCare[]
                
        }
        catch(e){
            console.log(e)
        }
        }
    }


    const  {data} = useQuery([coordinates?.long],()=> getDayCares(coordinates?.long as number, coordinates?.lat as number), {
        staleTime: 5000,
        cacheTime: 5000,
        enabled: coordinates ? true : false
    })
    return {data, setCoordinates, coordinates}
}

export default useGetDaycares