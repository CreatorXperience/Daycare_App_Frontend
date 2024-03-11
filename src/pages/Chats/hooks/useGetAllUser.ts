import { useState } from "react"
import {TChats, TIds} from "../type"
import { useQueries } from "react-query"
import { fetchAllChats } from "../../../services/Chat"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"



const useGetAllUser = ()=>{
    const [chats, setChats] = useState<Array<TIds>>([])
    const {user} = useGetuserInfoFromStorage()
    const results = useQueries(chats?.map((id)=>{
        return {queryKey: ["chat", id.chatId], queryFn: () => fetchAllChats(id.usrId, id.chatId,user), enabled: !!chats}
    }))

    let response = results.filter((data)=> data.data &&  data.data._doc !== undefined).map((data, i)=> ({...data.data._doc, chatId: chats[i].chatId}) ) as TChats[]

    console.log(results)
    return {response, setChats}
}

export default useGetAllUser