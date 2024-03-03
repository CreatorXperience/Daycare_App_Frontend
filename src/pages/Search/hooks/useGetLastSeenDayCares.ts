import { useContext, useEffect, useMemo, useState } from "react"
import { useQueries } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { TLoginResponse } from "../../Auth/Login/type"
import { UserContext } from "../../../App/App"
import { AxiosResponse } from "axios"
import { TChildCare } from "../../Home/type"
import { TQuery } from "../type"


const useGetLastSeen = ()=>{
    const user = useContext(UserContext)
    let [seen, setSeen] = useState<string[]>([])
    const FetchDayCares = async(id: string)=>{
        let user =  localStorage.getItem("DayCareuserLoginInfo")
        if(user){ 
         let parsedUserObj = JSON.parse(user) as TLoginResponse
        let token  =  parsedUserObj.token
        try{
            let response = await axiosInstance.get(`${ENDPOINT.getChildCares}/${id}`,{
                headers: {
                    authorization: token
                }
            })
            return response
        }catch(e){
            console.log(e)
        }
    }
    }

    useEffect(()=>{
        if(user?.seen)
        setSeen(user.seen)
    },[user, user?.seen])

    
    let useQueryPayload =  seen.map((item)=>  ({queryKey: item, queryFn: ()=> FetchDayCares(item)})) as TQuery
    let result = useQueries(useQueryPayload)

    const resultMemo = useMemo(()=>{
        let alldata = result.map((item)=> item.data?.data) as TChildCare[]
        return alldata
    }, [result])

            return {resultMemo}
    
}

export default useGetLastSeen