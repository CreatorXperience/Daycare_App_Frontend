import styled from "styled-components";
import { colors } from "../../../constants/colors";

const SignUpWrapper = styled.div`
width: 100%;
height: 100vh;

overflow-y: auto;


.back-wrapper {
    width: 100%;
    height: auto;
    padding: 12px;

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

    .input-wrapper {
     padding-top:20px;


     .error{ 
        padding: 12px;
        color: red;
     }
    }
}


`

export default SignUpWrapper