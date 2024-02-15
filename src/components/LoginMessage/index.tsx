import styled from "styled-components"
import NameInput from "../NameInput"


type TLoginMessageProps = {
title: string,
message: string
}

const LoginMessage = ({title,message}: TLoginMessageProps)=>{
    return (
        <LoginMessageWrapper>
        <div className="message-wrapper">
            <div className="message-title"> {title} </div>
            <div className="message">{message}</div>
        </div>
        </LoginMessageWrapper>
    )
}


export default LoginMessage
const  LoginMessageWrapper = styled.div`
.message-wrapper {
width: 100%;
padding: 12px;
    .message-title{
        font-size: 20px;
        font-weight: 800;
    }
    
    .message {
        
    }
}
`