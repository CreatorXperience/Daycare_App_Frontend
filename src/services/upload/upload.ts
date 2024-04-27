import { TLoginResponse } from "../../pages/Auth/Login/type"
import { TMessage } from "../../pages/ChildcareProfile/type"
import axiosInstance from "../Axios/axiosInstance"
import { TUpload } from "./type"


const uploadImage = async (upload: TUpload)=>{
    let formData =  new FormData()
    formData.append("file", upload.payload.file)
    try{
        let user = localStorage.getItem("DayCareuserLoginInfo")
        if(user){
            let parseUser = JSON.parse(user) as  TLoginResponse
            let response = await axiosInstance.post(`${upload.payload.endpoint}`,formData, {
                headers: {
                    authorization: parseUser.token
                }
            })
            return response.data as TMessage
        }
    }
    catch(e:any){
        console.log(e)
         upload.payload.setError(e.response)
    }
    
}

export {uploadImage}