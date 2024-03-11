import styled from "styled-components";
import { colors } from "../../constants/colors";

const MessageWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-flow: column;
position: relative;

.messages {
    width: 100%;
    height: 88%;
    overflow-y: auto;


    .message {
        width: 100%;
        display: flex;

        .text {
            width: fit-content;
            height: fit-content;
            padding: 12px;
            
            color: ${colors.primary.white};
            font-size: 14px;
            font-weight: 600;
            margin: 12px;
        }

        .blue {
             border-radius: 10px 0px 10px 21px;
            -webkit-border-radius: 10px 0px 10px 21px;
            -moz-border-radius: 10px 0px 10px 21px;
            background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
        }

        .gray {
            background-color: ${colors.primary.lightGray};
            color: ${colors.primary.black};
            border-radius: 0px 27px 10px 10px;
            -webkit-border-radius: 0px 27px 10px 10px;
            -moz-border-radius: 0px 27px 10px 10px;
        }
     

  
    }
    .right {
            justify-content: end;
        }

        .left {
          justify-content: start;
        }
}

.message-cont{
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    position: relative;
    background-color: ${colors.primary.white};
    box-shadow: 5px 2px 8px 5px rgba(0, 0, 0, 0.10);
    padding: 10px;

    
    .message-input {
     width: 95%;
     height: 50px;
    background-color: ${colors.primary.grayishWhite};
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-content: center;

    margin: 0 auto;
    

    form{
        width: 100%;
        height: auto;
     
        input {
            width: 90%;
            height: 50px;
            border-radius: 25px;
            border: none;
            background-color: transparent;
            padding: 10px;
            outline: none;
        }

        .plane {
            font-weight: bolder;
            font-size: 20px;
        }
    }
}
}

`
export default MessageWrapper