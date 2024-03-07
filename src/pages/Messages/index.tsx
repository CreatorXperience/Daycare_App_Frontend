import styled from "styled-components"
import Header from "../../components/Header"
import { GoChevronLeft, GoKebabHorizontal } from "react-icons/go"
import NameInput from "../../components/NameInput"
import ChatCard from "../../components/Chatcard"
import NavBarIcon from "../../components/NavBarIcons"
import { colors } from "../../constants/colors"
import useGetChat from "./hooks/useGetChats"
import _ from "lodash"
import { useMemo } from "react"
import useGetuserInfoFromStorage from "../../utils/useGetUserInfoFromStorage"



const Messages = ()=>{

    const {data} = useGetChat()
    const {user} = useGetuserInfoFromStorage()

    const recipientIds = useMemo(()=> {
        if(data){
 return  data.chat.map((item)=>{
            return  {usrId: item.members.filter((member)=> member !== user?.message._id)[0], chatId: item._id }
            }).filter((obj)=> obj.usrId !== undefined )     
        }
    }, [data])

    console.log(recipientIds)

    
    
    return (
        <MessageWrapper>
            <div className="header">
            <Header title="Messages">
            <GoChevronLeft />
            <GoKebabHorizontal />
            </Header>
            
            </div>
        <div className="msg-cont">
            <div className="wrapper">
            <NameInput 
            label=""
            placeholder="Search friends..."
            onChangeHandler={()=> ""}
            type="text"
            borderradius="26px"
            />
            </div>

            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />    
        </div>
        <div className="footer">
        <NavBarIcon />
        </div>
      
        </MessageWrapper>
    )
}

export default Messages

const MessageWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-flow: column;
position: relative;

.msg-cont {
width: 100%;
height: 80%;
padding: 12px;
overflow-y: auto;

.wrapper{
    width: 100%;
    margin-bottom: 20px;
}
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: ${colors.primary.white};
}
`