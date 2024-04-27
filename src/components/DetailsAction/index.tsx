import {FaComment, FaPhoneAlt} from "react-icons/fa"
import { colors } from "../../constants/colors"
import useCopy from "./hooks/useCopy"
import type { TDetails } from "./type"
import DetailsActionWrapper from "./DetailsActionWrapper"
import { memo, useEffect, useState} from "react"
import Modal from "../Modal"
import Prompt from "../Prompt"
import useChatClick from "./hooks/useChatClick"
import useGetDaycareImageId from "./hooks/useGetDaycareImage"



const DetailsAction = ({content: {owner,phoneNumber,setIsCopied, id}}: TDetails)=>{
const {handleCopyClick} = useCopy(phoneNumber, setIsCopied)
const {handleChatClick,isChatClick, handleChatClickCalback} =  useChatClick()
const {res} = useGetDaycareImageId(id)
const [imageId, setImageId]= useState<string>()

useEffect(()=>{
if(res){
    setImageId(res.imageId)
}
},[res])

console.log(imageId)
    return (
        <DetailsActionWrapper id={imageId}>
            <div className="action-container">
                {isChatClick ? <Modal> <Prompt handleChatClick={handleChatClickCalback}  id= {id} message="are you sure you wanna chat with the owner of the daycare" /> </Modal>: ""}
                <div className="info-cont">
                <div className="profile"></div>
            <div className="name">
                <p className="user-name">{owner}</p>
                <p className="user-role">
                   Teacher
                </p>

            </div>
                </div>
            

            <div className="action-button">
                <div className="phone-container">
                <input className="phone" value={phoneNumber ? phoneNumber : ""} onClick={handleCopyClick} readOnly />
                <FaPhoneAlt className="phone-icon" size="20px" color="red"/>
                </div>
                

                    <div className="comment" onClick={()=> handleChatClick(true)} >
                    <FaComment size="20px" color={colors.primary.cyan}  />
                    </div>
             
              
            </div>
            </div>
        </DetailsActionWrapper>
    )
}

export default memo(DetailsAction)

