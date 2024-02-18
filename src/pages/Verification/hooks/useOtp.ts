import { useEffect, useState } from "react"
import useSendOtp from "./useSendOtp"
import { TResponse } from "../../Auth/Signup/type"
import { useNavigate } from "react-router-dom"

const useOtp = ()=>{
    const [otp,setOtp] = useState<string>()
    const {mutateOtp,errorResponse,isLoading, response} = useSendOtp()
    const navigate = useNavigate()

    useEffect(()=>{
        let user =  localStorage.getItem("userDayCareInfo")
        if(otp?.length === 6 && user){
             let parsedUserObj = JSON.parse(user) as TResponse
        
             mutateOtp({otp, ownerId: parsedUserObj.message._id})
        }
    }, [otp])


    useEffect(()=>{
        if(response){
            navigate("/login")
        }
    },[response])

    const handleChangeOtp = (e: React.ChangeEvent<HTMLInputElement>)=>{
e.preventDefault()

setOtp(e.target.value)
    }


    const handleSubmitOtp = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        let user =  localStorage.getItem("userDayCareInfo")
        if(otp?.length === 6 && user){
            console.log(user)
             let parsedUserObj = JSON.parse(user) as TResponse
             mutateOtp({otp, ownerId: parsedUserObj.message._id})
        }
        console.log(otp)
    }

    return {otp, handleChangeOtp, handleSubmitOtp,errorResponse,isLoading}
}

export default useOtp