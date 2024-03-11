import { useEffect, useMemo } from "react"
import useGetChat from "./useGetChats"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import useGetAllUser from "./useGetAllUser"

const useGetIds = ()=>{
    const {data} = useGetChat()
    const {user} = useGetuserInfoFromStorage()
    const {setChats,response} =  useGetAllUser()

    console.log(data)
    const recipientIds = useMemo(()=> {
        if(data){
        return  data.chat.map((item)=>{
            return  {usrId: item.members.filter((member)=> member !== user?.message._id)[0], chatId: item._id }
            }).filter((obj)=> obj.usrId !== undefined)     
        }
    }, [data])

    useEffect(()=>{
        if(recipientIds)
        setChats(recipientIds)
    }, [recipientIds])

    return {response}
    
}
export default useGetIds