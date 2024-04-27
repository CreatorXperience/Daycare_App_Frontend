import { useEffect, useState } from "react"
import useSendOtp from "./useSendOtp"
import { TResponse } from "../../Auth/Signup/type"
import { useNavigate } from "react-router-dom"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { TOtp } from "../type"



const useOtp = ()=>{
    const [otp,setOtp] = useState<string>()
    const {mutateOtpCallback,errorResponse,isLoading, response} = useSendOtp()
    const navigate = useNavigate()
    const {user:loggedIn} = useGetuserInfoFromStorage()
    let user =  localStorage.getItem("userDayCareInfo")
    const [userOtp, setUserOtp] = useState<TOtp>()


     useEffect(()=>{
        if(user){
            let parsedUserObj = JSON.parse(user) as TResponse
            setUserOtp({email: parsedUserObj.message.email, id: parsedUserObj.message._id})
        }
        else if(loggedIn){
            setUserOtp({email: loggedIn.message.email, id: loggedIn.message._id})
        }
     }, [user, setUserOtp,loggedIn])


    useEffect(()=>{
        if(otp?.length === 6 && user){
             let parsedUserObj = JSON.parse(user) as TResponse
        
             mutateOtpCallback({otp, ownerId: parsedUserObj.message._id})
        }
    }, [otp, mutateOtpCallback,user])


    useEffect(()=>{
        if(response && !errorResponse){
            localStorage.removeItem("DayCareuserLoginInfo")
            localStorage.removeItem("userDayCareInfo")
            navigate("/login")
        }
    },[response, navigate,errorResponse])

    const handleChangeOtp = (e: React.ChangeEvent<HTMLInputElement>)=>{
e.preventDefault()

setOtp(e.target.value)
    }


    const handleSubmitOtp = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
   
        if(otp?.length === 6 && user){
             let parsedUserObj = JSON.parse(user) as TResponse
             mutateOtpCallback({otp, ownerId: parsedUserObj.message._id})
        }
        else if(otp?.length === 6 && loggedIn){
            mutateOtpCallback({otp, ownerId: loggedIn.message._id})
        }
    }

    return {otp, handleChangeOtp, handleSubmitOtp,errorResponse,isLoading, userOtp}
}

export default useOtp