import { useMutation } from "react-query"
import { useState } from "react"
import type { TOtpPayload, TOtpResponse } from "../type"
import sendOtp from "../../../services/Otp"



const useSendOtp  = ()=> {
    const [response,setResponse] =  useState<TOtpResponse>()
    const [errorResponse,setErrorResponse] =  useState<TOtpResponse>()

   
let {mutate,isLoading} = useMutation("otp", sendOtp )


const mutateOtp = (otpPayload:  TOtpPayload)=>{
    mutate(otpPayload, {
        onSuccess: (data)=>{
            if(data.status !== "404"){
              return   setResponse(data)
            }
            setErrorResponse(data)
        }
    })
}


return {mutateOtp, response, errorResponse,isLoading}


}

export default useSendOtp