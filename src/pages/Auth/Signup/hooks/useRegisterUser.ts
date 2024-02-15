
import { useMutation } from "react-query"
import { useEffect, useState } from "react"
import type { TUserPayload } from "./type"
import { fetchUser } from "../../../../services/Axios/user"
import { useNavigate } from "react-router-dom"


const useRegisterUser = ()=>  {
    const [response, setResponse] =  useState<{}>()
    const [errorResponse, setErrorResponse] =  useState<{message: string} | null>()
    const {mutate} =  useMutation("register-user", fetchUser)
    const navigate =  useNavigate()


    useEffect(()=>{
        // if(response){
        //     navigate("/login")
        // }
    }, [response])

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