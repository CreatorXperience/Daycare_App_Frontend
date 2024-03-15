import { useNavigate } from "react-router-dom"
import { TLoginResponse } from "../../pages/Auth/Login/type"
import { useEffect } from "react"

const useRedirect =()=>{
    const navigate = useNavigate()
    
    useEffect(()=>{
        let user =  localStorage.getItem("DayCareuserLoginInfo")
        if(user){ 
            let parsedUserObj = JSON.parse(user) as TLoginResponse
             if(parsedUserObj){
               navigate("/position")
             }
           }
    })
}

export default useRedirect