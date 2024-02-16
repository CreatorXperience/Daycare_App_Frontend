
import { useMutation } from "react-query"
import { useContext, useEffect, useState } from "react"
import {loginUser } from "../../../../services/Axios/user"
import { useNavigate } from "react-router-dom"
import {UserLoginContext } from "../../../../App/App"
import { TLoginResponse} from "../type"
import { TUserPayload } from "../../Signup/hooks/type"


const useLoginUser = ()=>  {
    const [response, setResponse] =  useState<TLoginResponse>()
    const [errorResponse, setErrorResponse] =  useState<{message: string} | null>()
    const {mutate} =  useMutation("register-user",  loginUser)
    const navigate =  useNavigate()
    const  user = useContext(UserLoginContext)

    useEffect(()=>{
        if(response &&  user){
            user.setUserLoginInfo(response)
            navigate("/login")
        }
    }, [response, user, navigate])

    const mutateUserData = (userPayload: TUserPayload)=> {
    mutate(userPayload, {
        onSuccess: (data)=>{
            if(data.status !== String(404)){
             setResponse(data)
             return setErrorResponse(null)
            }
            setErrorResponse(data)
        }
    })
}

return {response, mutateUserData,errorResponse}
}

export default useLoginUser