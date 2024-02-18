import styled from "styled-components";
import { colors } from "../../constants/colors";

const VerificationWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
overflow-y: auto;


.dev {
    font-size: 25px;
}



    .verification-container {
        width: 80%;
        border-radius: 10px;
        color: white;
        font-weight: bolder;

        .message {
            text-align: center;
            color: ${colors.primary.black};
            padding: 10px;
        }
       

        .input-cont{ 

            .verify-text{ 
                font-size: 22px;
                font-weight: 600;
                color: ${colors.primary.white}
            }

            form {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                .error {
                    color: black
                }

                .verifybtn {
                width: 80%;
                padding: 12px;
                text-align: center;
                background-color: ${colors.primary.cyan};
                color: ${colors.primary.white};
                border: none;
                font-size: 20px;
                font-weight: 800;
            }
            }

           
        }

        .input-container {
            width: 100%;
            place-self: center;
            margin-top: -10px;
    
            color: transparent;


                input {
                    background-color: transparent;
                    color: ${colors.primary.black};
                }

        }

    }
`
export default VerificationWrapper