import {useState } from "react"
import { useQuery } from "react-query"
import { TResendOtp } from "../type"
import { resendOtp } from "../../../services/Otp"




const useResendOtp = ()=>{ 
    const [otpPayload, setOtpPayload] =  useState<Partial<TResendOtp>>()
    const [response, setResponse] =  useState()

    const [error, setError] =  useState()


let {isError, isSuccess,isLoading,data} = useQuery(["resendOtp",otpPayload],() =>  resendOtp({id: otpPayload?.id, email: otpPayload?.email,setError}), {
    enabled: otpPayload ? true: false,
    cacheTime: 30000,
    staleTime: 30000,
    refetchOnWindowFocus: false,
    onSuccess: (data)=> {
        if(data){
            setResponse(data)
        }
    },
    isDataEqual(oldData, newData) {
        if(oldData === newData){
          
            return true
        }
        return false
    },


}) 



return {isError,isSuccess, setOtpPayload, response,error,isLoading,data}
}

export default useResendOtp