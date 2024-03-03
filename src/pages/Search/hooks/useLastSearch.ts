import { useContext } from "react";
import { UserContext } from "../../../App/App";

const useLastSearch = ()=>{
    const user = useContext(UserContext)

    const handleLastSearch = (search: string)=>{
      let  lastSearch  = localStorage.getItem("lastSearch") 
  
      let parseObj:[] = [];
      if(lastSearch){
         parseObj  =  JSON.parse(lastSearch) as []
      }
  
  
         let  isFound =  parseObj.some((item)=> item === search )
         let currentLastSearch:string[]  = []
         if(isFound){
           currentLastSearch = [...parseObj]
           return currentLastSearch
         }
         if(parseObj.length > 14){
         parseObj =  parseObj.filter((item,i)=> i !== parseObj.length-1 ) as []
         }
         currentLastSearch = [search,...parseObj]
         user?.setLastSearch(currentLastSearch)
         localStorage.setItem("lastSearch", JSON.stringify(currentLastSearch))
    }

    return {handleLastSearch}
}

export default useLastSearch