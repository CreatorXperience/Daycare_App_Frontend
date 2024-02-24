import styled from "styled-components"
import {FaComment, FaPhoneAlt} from "react-icons/fa"
import { colors } from "../../constants/colors"
import { useState } from "react"


type TDetails = {
    content: {
        owner: string,
        role?: string,
        phoneNumber?: string
    }
}
const DetailsAction = ({content: {owner,phoneNumber}}: TDetails)=>{

console.log(phoneNumber)
    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text: string) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }


    const handleCopyClick = () => {
        if(phoneNumber)
        
        copyTextToClipboard(phoneNumber)
          .then(() => {
            setIsCopied(true);
            console.log("copied")
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }

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
                <input className="phone" value={phoneNumber} onClick={handleCopyClick} readOnly />
                <FaPhoneAlt  size="20px" color="red"/>
                

                    <div className="comment">
                    <FaComment size="20px" color={colors.primary.cyan}  />
                    </div>
             
              
            </div>
            </div>
        </DetailsActionWrapper>
    )
}

export default DetailsAction

const DetailsActionWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .action-container {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .info-cont {
            display: flex;
            align-items: center;
            
        }

        .profile{ 
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-image: url("https://i.pinimg.com/564x/99/03/34/9903345b0d415013d2a840842451e6d0.jpg");
            background-size: contain;
        }

        .name {
            padding: 8px;

            .user-name{
                font-size: 16px;
                font-weight: bolder;
            }
            .user-role {
                font-size: 14px;
            }
        }

        .action-button {
            display: flex;
            justify-content: space-between;
            padding: 12px;

            .phone {
                width: 40px;
                margin-right: 10px;
                background-color: ${colors.primary.red}; 
                display: flex;
                justify-content: center;
                padding: 10px;
                border-radius: 10px;
            }

            .comment {
                width: 40px;
                margin-right: 10px;
                background-color: ${colors.primary.lightCyan}; 
                display: flex;
                justify-content: center;
                padding: 10px;
                border-radius: 10px;
            }


        }
    }
`