import ChatCardWrapper from "./ChatCardWrapper"

const ChatCard = ()=>{
    return (
        <ChatCardWrapper>
            <div className="action-container">
               
                <div className="info-cont">
                <div className="profile"></div>
            <div className="name">
                <p className="user-name">Peter Chukwudi</p>
                <p className="user-role">
                   Teacher
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