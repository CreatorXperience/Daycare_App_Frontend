import styled from "styled-components"
import {FaComment, FaPhoneAlt} from "react-icons/fa"
import { colors } from "../../constants/colors"

const DetailsAction = ()=>{
    return (
        <DetailsActionWrapper>
            <div className="action-container">
            <div className="profile"></div>
            <div className="name">
                <p className="user-name"></p>
                <p className="user-role">
                    Childcare Owner
                </p>
            </div>

            <div className="action-button">
                <FaPhoneAlt  className="phone" color="red"/>
                <FaComment className="comment"  />
              
            </div>
            </div>
        </DetailsActionWrapper>
    )
}

export default DetailsAction

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

        .profile{ 
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-image: url("https://i.pinimg.com/564x/99/03/34/9903345b0d415013d2a840842451e6d0.jpg");
            background-size: contain;
        }

        .name {

        }

        .action-button {
            display: flex;
            justify-content: space-between;
            padding: 12px;

            .phone {
                margin-right: 10px;
                background-color: ${colors.primary.cyan}; 
            }


        }
    }
`