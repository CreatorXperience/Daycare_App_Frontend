import styled from "styled-components";
import { colors } from "../../constants/colors";
import { ENDPOINT, URL } from "../../constants/endpoints";

const UserProfileWrapper = styled.div<{id?:string}>`
width: 100%;
height: 100%;

.UserWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .profile-card {
        width: 90%;
        height: 120px;
        /* border: 1px solid red; */
        background-color: ${colors.primary.white};
        border-radius: 10px;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
        margin-top: 20px;
        display: flex;
        align-items: center;

        .circle {
            width: 100px;
            height: 100px;
            border: 1px solid red;
            border-radius: 50%;
            margin: 10px 12px;
            position: relative;
            background-image:  url(${props => props.id ? URL().endpoint+""+ENDPOINT.userprofile+"/"+props.id: ""});
            background-size: cover;

            form {
                display: none;
            }

            button {
                position: absolute;
                bottom: 0;
                right: 0;
                border-radius: 5px;
                border: none;
                font-size: 12px;
                color: white;
                padding: 2px;
                background:  linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
            }
        }

        .desc {
            p:first-child{
                font-weight: bolder;
                font-size: 14px;
            }
            p:nth-of-type(2){
                font-size: 12px;
            }

            button {
                background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
                padding: 5px;
                border-radius: 5px;
                border: none;
                font-size: 12px;
                box-sizing: border-box;
                color: white;
            }
        }

        
    }

    .options {
        width: 90%;

        .option1,.option2 {
            width: 100%;
            height: auto;
            background-color: ${colors.primary.white};
            border-radius: 10px;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
            padding: 12px;
            margin: 12px 0px;
            font-size: 14px;
            font-weight: bolder;
            cursor: pointer;
        }

        .option2,.option1 {
            .desc {
                font-size: 12px;
                font-weight: 400;
                padding: 5px;
            }
        }
    }
}
    
`

export default UserProfileWrapper