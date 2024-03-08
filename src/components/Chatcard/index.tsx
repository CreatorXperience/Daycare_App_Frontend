import ChatCardWrapper from "./ChatCardWrapper"
import { TChatProp } from "./type"



const ChatCard = ({content}: TChatProp)=>{
    return (
        <ChatCardWrapper>
            <div className="action-container">
               
                <div className="info-cont">
                <div className="profile"></div>
            <div className="name">
                <p className="user-name">{content?.fullname}</p>
                <p className="user-role">
                </p>

            </div>
                </div>
            

            <div className="message-details">
                <div className="time">9:05 AM</div>
                <div className="status">1</div>
            </div>
            </div>
        </ChatCardWrapper>
    )
}

export default ChatCard