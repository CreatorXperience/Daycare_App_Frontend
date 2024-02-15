import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TResponse } from "../../pages/Auth/Signup/hooks/type"

const useIsUserRegistered = ()=>{
    const navigate = useNavigate()
    const [userInfo, setUserInfo] =  useState<TResponse>()

    const UserContextValue =  useMemo(()=>{
        return {setUserInfo, userInfo}
        }, [userInfo])
        
        
        useEffect(()=>{
          if(userInfo){
            localStorage.setItem("userDayCareInfo", JSON.stringify(userInfo))
            navigate("/login")
          }
        }, [userInfo])
        
        useEffect(()=>{
         let user =  localStorage.getItem("userDayCareInfo")
         if(user){ 
          let parsedUserObj = JSON.parse(user) as TResponse
          setUserInfo(parsedUserObj)
         }
        },[])

        return {UserContextValue}
}

export default useIsUserRegistered