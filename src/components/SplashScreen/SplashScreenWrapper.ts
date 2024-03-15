import styled from "styled-components";
import { colors } from "../../constants/colors";

const SplashWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: hidden;

    .icons-2{
         width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;
    }

    .btn-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 50px;

        .Next {
         width: 70%;
         padding: 12px;
        border-radius: 10px;
        background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
        border: none;
        outline: none;
        font-size: 20px;
        color: ${colors.primary.white};
        font-weight: bold;
        }
    }
`

export default SplashWrapper