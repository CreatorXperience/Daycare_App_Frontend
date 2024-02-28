import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App/App";

const useSeen = ()=>{
    const  navigate = useNavigate()
    const user = useContext(UserContext)
    const handleNavigateAndSaveLastSeen = (id: string)=>{
      let  lastSeen  = localStorage.getItem("lastSeen") 
  
      let parseObj:[] = [];
      if(lastSeen){
         parseObj  =  JSON.parse(lastSeen) as []
      }
  
  
         let  isFound =  parseObj.some((item)=> item === id )
         let currentLastSeen:string[]  = []
         if(isFound){
           currentLastSeen = [...parseObj]
           navigate(`/details/${id}`) 
           return currentLastSeen
         }
         currentLastSeen = [id,...parseObj]
         user?.setSeen(currentLastSeen)
         localStorage.setItem("lastSeen", JSON.stringify(currentLastSeen))
  
      navigate(`/details/${id}`) 
    }

    return {handleNavigateAndSaveLastSeen}
}

export default useSeen