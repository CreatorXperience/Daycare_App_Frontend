import styled from "styled-components";
import { colors } from "../../constants/colors";

const ChatCardWrapper = styled.div`
    width:95%;
    height: 60px;
    margin-top: 20px;
    border-bottom: 2px solid ${colors.primary.lightGray};
    padding-bottom: 10px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    flex-flow: column;

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
            background-color: ${colors.primary.cyan};
            background-size: contain;
            color: white;
            font-size: 20px;
            display: flex;
            justify-content:  center;
            align-items: center;
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

        .message-details {
            display: flex;
            flex-flow: column;
            align-items: center;
            .time {
                font-size: 14px;
            }
            .status {
                width: 20px; 
                height: 20px;
                background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-weight: 600;
                padding: 5px;
                color: ${colors.primary.white}
            }
        }
    }
    .newMessage {
        padding: 12px;
    }
`

export default ChatCardWrapper