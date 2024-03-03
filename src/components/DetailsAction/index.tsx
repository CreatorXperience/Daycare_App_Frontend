import {FaComment, FaPhoneAlt} from "react-icons/fa"
import { colors } from "../../constants/colors"
import useCopy from "./hooks/useCopy"
import type { TDetails } from "./type"
import DetailsActionWrapper from "./DetailsActionWrapper"



const DetailsAction = ({content: {owner,phoneNumber,setIsCopied}}: TDetails)=>{

const {handleCopyClick} = useCopy(phoneNumber, setIsCopied)

    return (
        <DetailsActionWrapper>
            <div className="action-container">
                
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
                

                    <div className="comment">
                    <FaComment size="20px" color={colors.primary.cyan}  />
                    </div>
             
              
            </div>
            </div>
        </DetailsActionWrapper>
    )
}

export default DetailsAction

