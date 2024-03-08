import styled from "styled-components"
import { colors } from "../../constants/colors"


const MessageHeader = ()=>{
return (
    <MessageWrapper>
    <div className="circle-cont">
        <div className="circle"></div>
        <div className="info">
        <div className="username">Sofia</div>
        <div className="status">online</div>
        </div>
    </div>
    </MessageWrapper>
)
}

export default MessageHeader

const MessageWrapper  = styled.div`
width: 100%;



.circle-cont {
    width: 100%;
    height: auto;
    display: flex;

    .circle {
        width:40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${colors.primary.textGray};
        margin-left: 20px;
    }

    .info {
        margin-left: 20px;
        
        .username {
            font-size: 18px;
            font-weight: bolder;
        }
        .status {
            font-size: 12px;
        }
    }
}

`