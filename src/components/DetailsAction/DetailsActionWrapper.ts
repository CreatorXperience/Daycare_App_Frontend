import styled from "styled-components";
import { colors } from "../../constants/colors";

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

            .phone-container {
                position: relative;
                width: 40px;

                    margin-right: 10px;
                    background-color: ${colors.primary.red}; 
                    display: flex;
                    justify-content: center;
                    padding: 10px;
                    border-radius: 10px;

                .phone {
                    width: 100%;
                    z-index: 99;
                    opacity: 0;
                    cursor: pointer;
                }

                .phone-icon{
                    position: absolute;
                    z-index: 1;
                }
            }


            .comment {
                width: 40px;
                margin-right: 10px;
                background-color: ${colors.primary.lightCyan}; 
                display: flex;
                justify-content: center;
                padding: 10px;
                border-radius: 10px;
                cursor: pointer;
            }


        }
    }
`

export default DetailsActionWrapper