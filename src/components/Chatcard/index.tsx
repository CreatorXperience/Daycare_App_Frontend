import { useNavigate } from "react-router-dom"
import ChatCardWrapper from "./ChatCardWrapper"
import { TChatProp } from "./type"
import ROUTE from "../../constants/routes"
import useGetuserInfoFromStorage from "../../utils/useGetUserInfoFromStorage"



const ChatCard = ({content}: TChatProp)=>{
    const navigate = useNavigate()
    const {user} =  useGetuserInfoFromStorage()


    console.log(content)
    return (
        <ChatCardWrapper>
            <div className="action-container" onClick={()=> navigate(`${ROUTE.messages}/${content?.chatId}/${user?.message._id}`)}>
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