import Header from "../../components/Header"
import {GoChevronLeft, GoKebabHorizontal, GoPaperAirplane } from "react-icons/go"
import MessageHeader from "../../components/MessageHeader"
import { colors } from "../../constants/colors"
import {useContext, useEffect, useRef} from "react"
import useGetMessages from "./hooks/useGetMessages"
import useHandleSendMessage from "./hooks/useHandleSendmessage"
import MessageWrapper from "./MessageWrapper"

import useGetuserInfoFromStorage from "../../utils/useGetUserInfoFromStorage"
import { MessageContext } from "../../App/App"
import { useNavigate } from "react-router-dom"


const Message = ()=>{
    const message = useContext(MessageContext)
    
    const {setChatId, refetch} =  useGetMessages()
    const {chatId,handleInputChange,handleSubmit,messages, reciever, user:chat} =  useHandleSendMessage()
    const ref =  useRef<HTMLDivElement | null>(null)
    const navigate =  useNavigate()

    useEffect(()=>{
        message?.setMesssages([])
        refetch()
    },[])

    useEffect(()=>{
        if(ref && ref.current){
            ref.current.scrollTop =  ref.current.scrollHeight
        }

    },[messages])

    const user = useGetuserInfoFromStorage()


    useEffect(()=>{
        setChatId(chatId)
    },[chatId, setChatId])

return (
    <MessageWrapper>
        <Header title="">
            <GoChevronLeft onClick={()=> {
                messages?.setMesssages([])
                navigate("/chats")
                }}/>   
            <GoKebabHorizontal />
            <MessageHeader id={reciever} chat={chat}/>
        </Header>

        <div className="messages" ref={ref}>
      {messages && messages.messages && messages?.messages.map((item,i)=> {
        return <div  key= {i} className={`message ${item.senderId === user.user?.message._id ? "right" : "left" } `}>
        <div className={`text ${item.senderId === user.user?.message._id ? "blue" : "gray" } `}>{item.message}</div>
     </div>
      }) }
        </div>
        <div className="message-cont">
        <div className="message-input">
            <form onSubmit={(e)=> handleSubmit(e)}>
                <input type="text" placeholder="message" onChange={(e)=> handleInputChange(e) } /> 
                <GoPaperAirplane className="plane"  color={colors.primary.cyan} onClick={(e)=> handleSubmit(e)}/>

            </form>
        </div>
</div>
    </MessageWrapper>
)
}
export default Message





