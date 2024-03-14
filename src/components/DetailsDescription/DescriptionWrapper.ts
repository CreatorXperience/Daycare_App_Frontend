import styled from "styled-components";
import { colors } from "../../constants/colors";

const DetailsDescriptionWrapper = styled.div<{isexpand?: string}>`
width: 100%;
display: flex;
justify-content: center;
margin-top: 20px;

    .details-container {
        width: 90%;
        height: ${(props)=> props.isexpand === "true" ? "auto": "40px" };
        overflow-y: hidden ;
        position: relative;
        font-size: 14px;
        font-weight: 600;
        overflow-x: hidden;

        .expand {
            position: absolute;
            margin-left: 20px;
            bottom: 0;
            margin-top: 10px;
            color: ${colors.primary.cyan};
            font-weight: bolder;
            z-index: 10;
            background-color: ${colors.primary.white};
            font-weight: bolder;
            width: 100%;
            padding-left: 10px;
        }

        span:first-child {
            z-index: 0;
        }

     
    }
`

export default DetailsDescriptionWrapper