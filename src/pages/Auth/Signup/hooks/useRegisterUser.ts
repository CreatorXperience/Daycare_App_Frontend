
import { useMutation } from "react-query"
import { useContext, useEffect, useState } from "react"
import type { TResponse, TUserPayload } from "./type"
import { fetchUser } from "../../../../services/Axios/user"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../../App/App"


const useRegisterUser = ()=>  {
    const [response, setResponse] =  useState<TResponse>()
    const [errorResponse, setErrorResponse] =  useState<{message: string} | null>()
    const {mutate} =  useMutation("register-user", fetchUser)
    const navigate =  useNavigate()
    const  user = useContext(UserContext)

    useEffect(()=>{
        if(response &&  user){
            user.setUserInfo(response)
            navigate("/login")
        }
    }, [response, user, navigate])

    const mutateUserData = (userPayload: TUserPayload)=> {
    mutate(userPayload, {
        onSuccess: (data)=>{
            if(typeof data.message !== "string"){
             setResponse(data)
             return setErrorResponse(null)
            }
            setErrorResponse(data)
        }
    })
}

return {response, mutateUserData,errorResponse}
}

export default useRegisterUser