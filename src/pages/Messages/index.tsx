import styled from "styled-components"
import Header from "../../components/Header"
import {GoChevronLeft, GoKebabHorizontal, GoPaperAirplane } from "react-icons/go"
import MessageHeader from "../../components/MessageHeader"
import { colors } from "../../constants/colors"
import useSendMessages from "./hooks/useSendMessages"
import { useState } from "react"
import { useParams } from "react-router-dom"

const Message = ()=>{
    const {mutateMessage} = useSendMessages()
    const [message, setMessage]  =  useState<string | null>(null)
    const {chatId, id} =  useParams()

    const handleSubmit = ()=>{
        if(message &&  chatId &&  id){
            mutateMessage({
                chatId: chatId,
                message,
                senderId: id
            })
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setMessage(e.target.value)
    }

return (
    <MessageWrapper>
        <Header title="">
            <GoChevronLeft />
            <GoKebabHorizontal />
            <MessageHeader />
        </Header>

        <div className="messages">
        <div className="message">
            <div className="text">Hixcvbnm,./xcvnm,./.mnbv</div>
        </div>
        </div>
<div className="message-cont">
<div className="message-input">
            <form onSubmit={()=> handleSubmit()}>
                <input type="text" placeholder="message" onChange={(e)=> handleInputChange(e) } /> 
                <GoPaperAirplane className="plane"  color={colors.primary.cyan}/>

            </form>
        </div>
</div>
    </MessageWrapper>
)
}
export default Message



const MessageWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-flow: column;
position: relative;

.messages {
    width: 100%;
    height: 75%;


    .message {
        width: 100%;
        height: auto;

        .text {
            width: fit-content;
            border-radius: 10px 0px 10px 21px;
            -webkit-border-radius: 10px 0px 10px 21px;
            -moz-border-radius: 10px 0px 10px 21px;
            padding: 12px;
            background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
            color: ${colors.primary.white};
            font-size: 14px;
            font-weight: 600;
        }
    }
}

.message-cont{
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    
    .message-input {
     width: 95%;
     height: 100%;
    background-color: ${colors.primary.grayishWhite};
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    

    form{
        width: 100%;
        height: 100%;
     
        input {
            width: 90%;
            height: 100%;
            border-radius: 25px;
            border: none;
            background-color: transparent;
            padding: 20px;
            outline: none;
        }

        .plane {
            font-weight: bolder;
            font-size: 20px;
        }
    }
}
}

`

