import { useNavigate } from "react-router-dom"
import ChatCardWrapper from "./ChatCardWrapper"
import { TChatProp } from "./type"
import useGetuserInfoFromStorage from "../../utils/useGetUserInfoFromStorage"
import { memo, useContext, useEffect, useRef } from "react"
import { NotificationContext } from "../../App/App"
import pierceWord from "../../utils/pieceWord"



const ChatCard = memo(({content}: TChatProp)=>{
    const navigate = useNavigate()
    const {user} =  useGetuserInfoFromStorage()
    const notification  = useContext(NotificationContext)


    const ref =  useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        if(ref.current && ref.current.children.length > 0) {
            ref.current.replaceChildren(ref.current.lastChild as Node)
        }
    },[])

    return (
        <ChatCardWrapper>
            <div className="action-container" onClick={()=> navigate(`/messages/${content?.chatId}/${user?.message._id}/${content?._id}/${content?.fullname}`)}>
                <div className="info-cont">
                <div className="profile">{ content?.fullname && pierceWord({name: content.fullname})}</div>
            <div className="name">
                <p className="user-name">{content?.fullname}</p>
                <p className="user-role">
                </p>

            </div>
                </div>
            

            <div className="message-details" ref={ref}>
            {notification && notification.notification && notification.notification.length !== 0 && notification.notification.filter((data)=> data.chatId === content?.chatId).map((item)=>{
              let len  = notification && notification.notification &&  notification.notification.filter((data)=> data.chatId === content?.chatId).length
                if(item.chatId === content?.chatId && ref.current){
               return    (  <div className="status">   
                        {notification && notification.notification && len}
                 </div>)
                }
            })}
            </div>
            </div>
            { notification && notification.notification && notification.notification[notification.notification.length-1] && notification.notification[notification.notification.length-1].chatId === content?.chatId &&
           <div className="newMessage">{notification.notification[notification.notification.length-1].message.slice(0,8)}...</div>

                }
        </ChatCardWrapper>
    )
})

export default ChatCard