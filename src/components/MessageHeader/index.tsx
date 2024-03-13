import { useContext } from "react"
import { OnlineUsersContext } from "../../App/App"
import MessageHeaderWrapper from "./MessageWrapper"
import { TMessageHeader } from "./type"



const MessageHeader = ({id,chat}: TMessageHeader)=>{
const onlineUsers =  useContext(OnlineUsersContext)

return (
    <MessageHeaderWrapper>
    <div className="circle-cont">
        <div className="circle"><span className={`${onlineUsers?.some((item)=> item.userId === id ) ? "online": "offline"}`}></span></div>
        <div className="info">
        <div className="username">{chat}</div>
        <div className="status">{onlineUsers?.some((item)=> item.userId === id ) ? "online": "offline"}</div>
        </div>
    </div>
    </MessageHeaderWrapper>
)
}

export default MessageHeader

