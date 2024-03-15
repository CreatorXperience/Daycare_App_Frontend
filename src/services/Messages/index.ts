import { ENDPOINT } from "../../constants/endpoints"
import { TMessage, TMessagePayload } from "../../pages/Messages/type"
import axiosInstance from "../Axios/axiosInstance"

const postMessage = async(payload: TMessagePayload)=> {
    if(payload.token){
        try{
            
            let response =  await axiosInstance.post(`${ENDPOINT.message}`,payload.payload, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": payload.token
                }
                })
                
                
                return response.data
            }
            catch(e){
            console.log(e)
            }
        }  
    }

    let fetchMessages = async(chatPayload: {token?: string, chatId?: string})=> {
        try{
            if(chatPayload.token && chatPayload.chatId){
                let response = await axiosInstance.get(`${ENDPOINT.message}?chatId=${chatPayload.chatId}`, {
                    headers: {
                        Authorization: chatPayload.token
                    }
                })
        
                return response.data as TMessage[]
            }
        }
        catch(e){
            console.log(e)
        }
    
    }

export {postMessage, fetchMessages}