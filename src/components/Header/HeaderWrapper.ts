import styled from "styled-components";
import { colors } from "../../constants/colors";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    .header-container {
        width: 92%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .icon-left, .icon-right {
            width: 40px;
            height: 40px;
            background-color: ${colors.primary.grayishWhite};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10%;
        }

    .page-title {
        font-size: 20px;
        font-weight: 600;
    }
    }
`

export default HeaderWrapper