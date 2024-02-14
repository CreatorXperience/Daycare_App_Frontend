import styled from "styled-components"
import ICONS from "../../constants/icons"
import { colors } from "../../constants/colors"
import LoginMessage from "../../components/LoginMessage"

const Signup = ()=>{
  return (
    <SignUpWrapper>
    <div className="back-wrapper">
        <div className="back-btn">{ICONS.bellIcon()}</div>

        <LoginMessage />
    </div>
    </SignUpWrapper>
  )
}

export default Signup


const SignUpWrapper = styled.div`
width: 100%;
height: 100vh;
border: 1px solid red;


.back-wrapper {
    width: 100%;
    height: auto;
    padding: 12px;
    border: 1px solid red;

    .back-btn{
        width: 50px;
        height: 50px;
        margin-top: 20px;
        margin-left: 20px;
        display: flex;
        justify-content: center;    
        align-items: center;
        border-radius: 10px;
        background-color: ${colors.primary.grayishWhite};
    }
}
`