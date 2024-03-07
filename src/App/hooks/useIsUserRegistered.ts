import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TResponse } from "../../pages/Auth/Signup/type"
import { TLoginResponse } from "../../pages/Auth/Login/type"

const useIsUserRegistered = (isCompatible: boolean | null)=>{
    const navigate = useNavigate()
    const [userInfo, setUserInfo] =  useState<TResponse>()
    const [userLoginInfo, setUserLoginInfo] = useState<TLoginResponse>()
    const [isModalOpen, setIsModalOpen]  = useState<boolean>(false)
    const [seen, setSeen] = useState<string[]>()
    const [search, setLastSearch] = useState<string[]>()


    const userSignupContextValue =  useMemo(()=>{
        return{userInfo, isModalOpen,seen, search, }
        }, [userInfo, isModalOpen,seen,search,])


    const userLoginContextValue = useMemo(()=>{
        return {userLoginInfo,setUserLoginInfo}
    },[userLoginInfo])
        
        useEffect(()=>{
          if(userInfo && isCompatible){
            localStorage.setItem("userDayCareInfo", JSON.stringify(userInfo))
          }
        }, [userInfo, isCompatible, navigate])

        useEffect(()=>{
          if(userLoginInfo && isCompatible){
            localStorage.removeItem("userDayCareInfo")
            
            localStorage.setItem("DayCareuserLoginInfo", JSON.stringify(userLoginInfo))
            
          }
        }, [userLoginInfo, isCompatible, navigate])
        
        useEffect(()=>{
         let user =  localStorage.getItem("userDayCareInfo")
         if(user){ 
          let parsedUserObj = JSON.parse(user) as TResponse 
          navigate("/home")
          setUserInfo(parsedUserObj)
         }
        },[navigate])


        useEffect(()=>{
          let user =  localStorage.getItem("DayCareuserLoginInfo")
          if(user){ 
           let parsedUserObj = JSON.parse(user) as TLoginResponse
     
           setUserLoginInfo(parsedUserObj)
          }
         },[])

         useEffect(()=>{
          let seen = localStorage.getItem("lastSeen")
          if(seen){
            let parse = JSON.parse(seen)
            setSeen(parse)
          }
         }, [])

  



        return {UserContextValue: userSignupContextValue, userLoginContextValue, isModalOpen, setLastSearch, setIsModalOpen, setSeen,setUserInfo, }
}

export default useIsUserRegistered