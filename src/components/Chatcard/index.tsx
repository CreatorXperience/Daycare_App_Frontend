import { useNavigate } from "react-router-dom"
import ChatCardWrapper from "./ChatCardWrapper"
import { TChatProp } from "./type"
import useGetuserInfoFromStorage from "../../utils/useGetUserInfoFromStorage"
import { useContext } from "react"
import { NotificationContext } from "../../App/App"



const ChatCard = ({content}: TChatProp)=>{
    const navigate = useNavigate()
    const {user} =  useGetuserInfoFromStorage()
    const notification  = useContext(NotificationContext)
    console.log(notification)
    return (
        <ChatCardWrapper>
            <div className="action-container" onClick={()=> navigate(`/messages/${content?.chatId}/${user?.message._id}/${content?._id}/${content?.fullname}`)}>
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
                {/* {notification &&  notification.notification?.map((item,i)=>{
                    if(item.chatId === content?.chatId){
                        return <div  >{notification && notification.notification && notification.notification.length}</div>
                    }
                    return ""
                })} */}

            {notification && notification.notification &&   <div className="status">   {
                       notification && notification.notification && notification.notification.length
                }
                </div>}
            </div>
            </div>
            { notification && notification.notification && 
                    <div className="newMessage">{notification.notification[notification.notification.length-1].message}</div>
                }
        </ChatCardWrapper>
    )
}

export default ChatCard