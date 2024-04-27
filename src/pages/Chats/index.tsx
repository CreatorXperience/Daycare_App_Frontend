import Header from "../../components/Header"
import { GoChevronLeft, GoKebabHorizontal } from "react-icons/go"
import NameInput from "../../components/NameInput"
import ChatCard from "../../components/Chatcard"
import NavBarIcon from "../../components/NavBarIcons"
import ChatsWrapper from "./ChatsWrapper"
import useGetIds from "./hooks/useGetId"
import { useMemo, useState } from "react"



const Chats = ()=>{

    const  {response} =  useGetIds()
    const [searchTerm, setSearchTerm] =  useState<string>("")

    const responseMemo = useMemo(()=> {
        return response.map((item)=> {
            if((searchTerm.toLowerCase() && item.fullname.toLowerCase().includes(searchTerm.toLowerCase() as string)) || searchTerm.toLowerCase()  === ""){
                return   item
            }
            return undefined
        }).filter((item)=> item !== undefined)
    },[response, searchTerm])


    const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchTerm(e.target.value)
    }

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
            onChangeHandler={(e)=> onSearchTermChange(e)}
            type="text"
            borderradius="26px"
            value={searchTerm}
            />
            </div>

        {responseMemo && responseMemo.map((item,i)=>{
            return   <ChatCard key= {i} content={item}  />
        })}
        
        {
            !responseMemo[0] ?  <div className="loading-cont">
                <p> Loading chats... </p>
            </div> : ""

        }
        </div>
        <div className="footer">
        <NavBarIcon />
        </div>
      
        </ChatsWrapper>
    )
}

export default Chats
