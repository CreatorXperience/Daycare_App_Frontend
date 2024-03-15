import styled from "styled-components";
import { colors } from "../../constants/colors";

const MessageHeaderWrapper  = styled.div`
width: 100%;

.circle-cont {
    width: 100%;
    height: auto;
    display: flex;

    .circle {
        width:40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${colors.primary.cyan};
        margin-left: 20px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 900;

        .online, .offline {
            width: 15px;
            height: 15px;
            position: absolute;
            border-radius: 50%;
            right: 0;
            bottom: 0;
        }

        .online {
            background-color: ${colors.primary.darkGreen};
        }

        .offline {
            background-color: ${colors.primary.textGray};
        }

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

export default MessageHeaderWrapper