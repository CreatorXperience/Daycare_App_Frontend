import { useState } from "react"
import { useQuery } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { TLoginResponse } from "../../Auth/Login/type"
import { TChildCare } from "../../Home/type"

const useGetDayCare = ()=>{
    const [id, setId]= useState<string>()

    const fetchDaycare = async ()=>{
        let user =  localStorage.getItem("DayCareuserLoginInfo")
        if(user &&  id){ 
            try{
                let parsedUserObj = JSON.parse(user) as TLoginResponse
             
                    let  response = await axiosInstance.get(`${ENDPOINT.getChildCares}/${id}`, {
                        headers: {
                    authorization: parsedUserObj.token
                }
             })
             return response.data as TChildCare
                
        }catch(e){
            console.log(e)
        }
    }
}
    let {data, isLoading} = useQuery([id], fetchDaycare, {
        enabled: id ? true : false,
        staleTime:5000,
        cacheTime: 5000
    })
    return {data, isLoading, setId}
}

export default useGetDayCare