import { memo, useContext, useEffect} from "react"
import useCreateChat from "./hooks/useCreateChat"
import { ChatContext } from "../../App/App"
import { TPrompt } from "./types"
import { useNavigate } from "react-router-dom"
import PromptWrapper from "./PromptWrapper"


const Prompt = ({message,handleChatClick,id}: TPrompt)=>{
    const {data,handleCreateChat} = useCreateChat()
    const chat = useContext(ChatContext)
    const navigate =  useNavigate()

    useEffect(()=> {
        if(data){
            navigate("/chats")
            chat?.updateUserChat(data)
            handleChatClick(false)
        }
    },[data,chat, handleChatClick,navigate])

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
