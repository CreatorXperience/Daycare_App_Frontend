import { useContext, useState } from "react"
import useSendMessages from "./useSendMessages"
import { useParams } from "react-router-dom"
import { MessageContext, SocketContext } from "../../../App/App"
import { TMessage } from "../type"
import _ from "lodash"

const useHandleSendMessage = ()=>{
    const {mutateMessage} = useSendMessages()
    const socket =  useContext(SocketContext)
    const [message, setMessage]  =  useState<string | null>(null)
    const {chatId, id, reciever} =  useParams()
    const messages = useContext(MessageContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(message &&  chatId &&  id && socket){
            setMessage("")

            let myMessage: TMessage = {
                 chatId: chatId,
                senderId: id,
                message: message,
                _id: id
            }
            socket.emit("newMessage" ,  {
                chatId: chatId,
                message,
                senderId: id,
                reciever
            })
            messages?.setMesssages((prev)=> {
                if(prev){
                    return [...prev, myMessage]
                }
            })
            mutateMessage(_.omit(myMessage, "_id"))
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setMessage(e.target.value)
    }
    return {handleSubmit, handleInputChange, chatId,messages}
}

export default useHandleSendMessage