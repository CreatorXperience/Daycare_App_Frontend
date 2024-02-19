import { ENDPOINT } from "../../constants/endpoints"
import { TOtpPayload } from "../../pages/Verification/type"
import axiosInstance from "../Axios/axiosInstance"

let   sendOtp = async(otpPayload:  TOtpPayload)=>{
    try{
        let  response =  await axiosInstance.post(`${ENDPOINT.verify}` , otpPayload )
        console.log(response.data)
        return  response.data
    }
    catch(e:any){
        console.log(e)
        let error =  {...e.response.data, status:"404"}
        console.log(error)
        return  error
    }
}

export default sendOtp