import { TCreatedChatResponse } from "../../components/Prompt/types"
import { ENDPOINT } from "../../constants/endpoints"
import { TLoginResponse } from "../../pages/Auth/Login/type"
import { TError } from "../../pages/Chats/type"
import axiosInstance from "../Axios/axiosInstance"
import { TChatPayload, TChats } from "./type"

const createChat = async (data: TChatPayload)=>{
    let user  = localStorage.getItem("DayCareuserLoginInfo")
    if(user){
        let parsedUser =  JSON.parse(user) as TLoginResponse
        try{
            let response = await axiosInstance.post(`${ENDPOINT.chats}/${data.id}`, {}, {
                headers: {
                    authorization: parsedUser.token
                }
            })
            return response.data  as TCreatedChatResponse
        }
        catch(e:any){
            data.setErrorResponse(e.response.data)
        }
    }
}


const fetchAllChats = async(id: string | undefined, chatId: string | undefined, user: TLoginResponse | null)=>{
  

    if(id && chatId && user && user.token)
    try{
       let response =  await axiosInstance.get(`${ENDPOINT.users}?id=${id}&chatId=${chatId}`, {
        headers: {
            authorization: user?.token
        }
       })
        return response.data
    }
    catch(e){
        return e
    }
}


const getChat = async (setError: (value: React.SetStateAction<TError[] | undefined>) => void)=> {
    let userInfo  = localStorage.getItem("DayCareuserLoginInfo")
    if(userInfo){
        let parsedInfo =  JSON.parse(userInfo)

    try{
        let response = await axiosInstance.get(`${ENDPOINT.chats}/allchats`,{
            headers: { 
                'Content-Type': 'application/json',       
                'Authorization': parsedInfo.token
            }
        })
        return  response.data as TChats
    }catch(e:any){
        let error = [{members: null, error: e}]
        setError(error)
    }
}
}

export {createChat, fetchAllChats, getChat}