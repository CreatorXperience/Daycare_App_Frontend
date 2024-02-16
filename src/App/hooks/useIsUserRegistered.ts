import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TResponse } from "../../pages/Auth/Signup/hooks/type"
import { TLoginResponse } from "../../pages/Auth/Login/type"

const useIsUserRegistered = (isCompatible: boolean | null)=>{
    const navigate = useNavigate()
    const [userInfo, setUserInfo] =  useState<TResponse>()
    const [userLoginInfo, setUserLoginInfo] = useState<TLoginResponse>()


    const userSignupContextValue =  useMemo(()=>{
        return {setUserInfo, userInfo}
        }, [userInfo])


    const userLoginContextValue = useMemo(()=>{
        return {userLoginInfo,setUserLoginInfo}
    },[userLoginInfo])
        
        useEffect(()=>{
          if(userInfo && isCompatible){
            localStorage.setItem("userDayCareInfo", JSON.stringify(userInfo))
            navigate("/login")
          }
        }, [userInfo, isCompatible])
        
        useEffect(()=>{
         let user =  localStorage.getItem("userDayCareInfo")
         if(user){ 
          let parsedUserObj = JSON.parse(user) as TResponse
          setUserInfo(parsedUserObj)
         }
        },[])

        return {UserContextValue: userSignupContextValue, userLoginContextValue}
}

export default useIsUserRegistered