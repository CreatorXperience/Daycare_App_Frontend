import { useNavigate } from "react-router-dom"
import { TLoginResponse } from "../../pages/Auth/Login/type"
import { useEffect, useState } from "react"

const useRedirect =()=>{
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState<boolean>()
    
    useEffect(()=>{
        let user =  localStorage.getItem("DayCareuserLoginInfo")
        if(user && isLogin){ 
            let parsedUserObj = JSON.parse(user) as TLoginResponse
             if(parsedUserObj){
               navigate("/position")
             }
           }
    },[isLogin])

    return {setIsLogin}
}

export default useRedirect