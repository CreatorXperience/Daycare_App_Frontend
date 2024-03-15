import styled from "styled-components"
import { colors } from "../../constants/colors"
import { memo, useContext, useEffect} from "react"
import useCreateChat from "./hooks/useCreateChat"
import { ChatContext } from "../../App/App"
import { TPrompt } from "./types"


const Prompt = ({message,handleChatClick,id}: TPrompt)=>{
    const {data,handleCreateChat} = useCreateChat()
    const chat = useContext(ChatContext)

    useEffect(()=> {
        if(data){
            chat?.updateUserChat(data)
            handleChatClick(false)
        }
    },[data])

    return (
        <PromptWrapper>
            <div className="overlay">
            <div className="prompt-cont">
            <div className="message"> {
                message 
            } ? </div>

            <div className="btnwrappper">
                <button onClick={()=> handleChatClick(false)}>cancel</button>
                <button onClick={()=> handleCreateChat(id)}>message</button>
            </div>
        </div>
            </div>
            </PromptWrapper>
    )
}

export default memo(Prompt)


const PromptWrapper =  styled.div`
width: 100%;
height: 100%;


.overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(49, 49, 49, 0.199);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 999;

    .prompt-cont {
    width: 90%;
    height: 100px;
    background-color: ${colors.primary.white};
    border-radius: 10px;
    position: relative;
    z-index: 999;
    padding: 12px;
    

    .message {
        font-size: 16px;
    }

    .btnwrappper{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: end;
        position: absolute;
        bottom: 5px;
        right: 1px;

        button {
            padding: 6px;
            border-radius: 8px;
            border: none;
            margin-right: 8px;
        }

        button:nth-child(2){
            background-color: ${colors.primary.cyan};
            color: white;
        }
    }
    }
}


`