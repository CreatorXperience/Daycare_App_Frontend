import Header from "../../components/Header"
import { GoChevronLeft, GoKebabHorizontal } from "react-icons/go"
import NameInput from "../../components/NameInput"
import ChatCard from "../../components/Chatcard"
import NavBarIcon from "../../components/NavBarIcons"
import _ from "lodash"
import ChatsWrapper from "./ChatsWrapper"
import useGetIds from "./hooks/useGetId"



const Chats = ()=>{

    const  {response} =  useGetIds()
    
    return (
        <ChatsWrapper>
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

        {response && response.map((item,i)=>{
            return   <ChatCard key= {i} content={item}  />
        })}
            
        </div>
        <div className="footer">
        <NavBarIcon />
        </div>
      
        </ChatsWrapper>
    )
}

export default Chats
