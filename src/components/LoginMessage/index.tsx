import styled from "styled-components"

const LoginMessage = ()=>{
    return (
        <LoginMessageWrapper>
        <div className="message-wrapper">
            <div className="message-title"> Welcome Back </div>
            <div className="message">Fill in  your email and password</div>
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
        font-weight: 600;
    }
    
    .message {
        
    }
}
`