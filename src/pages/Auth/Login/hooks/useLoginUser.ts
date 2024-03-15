
import { useMutation } from "react-query"
import { useContext, useEffect, useState } from "react"
import {loginUser } from "../../../../services/user"
import { useNavigate } from "react-router-dom"
import {UserLoginContext } from "../../../../App/App"
import { TLoginResponse} from "../type"
import { TUserPayload } from "../../Signup/type"


const useLoginUser = ()=>  {
    const [response, setResponse] =  useState<TLoginResponse>()
    const [errorResponse, setErrorResponse] =  useState<{message: any} | null>()
    const {mutate, isLoading} =  useMutation("register-user",  loginUser)
    const navigate =  useNavigate()
    const  user = useContext(UserLoginContext)

    useEffect(()=>{
        if(response && user){
            user.setUserLoginInfo(response)
        }
    }, [response, user, navigate])




    const mutateUserData = (userPayload: TUserPayload)=> {
        if(userPayload)
    mutate(userPayload, {
        onSuccess: (data)=>{
            if(data.status !== "404"){
             setResponse(data)
             return setErrorResponse(null)
            }

            setErrorResponse(data)
        }
    })
}

return {response, mutateUserData,errorResponse, isLoading}
}

export default useLoginUser