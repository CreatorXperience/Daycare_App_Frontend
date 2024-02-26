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



export {fetchDaycare}