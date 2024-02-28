import { useContext, useEffect, useMemo } from "react"
import useExpand from "../../DetailsDescription/hooks/useExpand"
import { UserContext } from "../../../App/App"

const useRecent = ()=>{
    const {handleExpand,isExpand}  = useExpand()
    const user = useContext(UserContext)

    let memoizeUser:any = useMemo(()=> {
     return   {setLastSearch: user?.setLastSearch}
    }, 
    [user])


    useEffect(()=>{
        let  item = localStorage.getItem("lastSearch")
        if(item){
            let parse = JSON.parse(item) as []
           memoizeUser?.setLastSearch(parse)
        }
    }
    , [])


    const handleRemoveLastSeen = (e: React.MouseEvent<SVGElement, MouseEvent>, i:number)=>{
        e.preventDefault()
        let  item = localStorage.getItem("lastSearch")
        if(item){
            let parse = JSON.parse(item) as []
           let  updatedSearch =  parse.filter((item, index)=>  index !== i )
           localStorage.setItem("lastSearch", JSON.stringify(updatedSearch))
            return user?.setLastSearch(updatedSearch)
        }
    }

    return {handleExpand,isExpand,handleRemoveLastSeen, user}
}
export default useRecent