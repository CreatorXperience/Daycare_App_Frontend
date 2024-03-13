import { ENDPOINT } from "../../constants/endpoints"
import { TLoginResponse } from "../../pages/Auth/Login/type"
import { TChildCare } from "../../pages/Home/type"
import axiosInstance from "../Axios/axiosInstance"

const fetchDaycare = async (id: string | undefined)=>{
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


const searchDayCares = async (term?: string)=>{

    let user =  localStorage.getItem("DayCareuserLoginInfo")
    if(user && term){ 
        try{

            let parsedUserObj = JSON.parse(user) as TLoginResponse
         
                let  response = await axiosInstance.get(`${ENDPOINT.searchChildcares}?q=${term}`, {
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


const getDaycareProfile = async (id: string | undefined)=>{
    let user =  localStorage.getItem("DayCareuserLoginInfo")
    if(user &&  id){ 
        try{
            let parsedUserObj = JSON.parse(user) as TLoginResponse
         
                let  response = await axiosInstance.get(`${ENDPOINT.getChildCares}/user?id=${id}`, {
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



export {fetchDaycare, getDayCares, searchDayCares,getDaycareProfile}