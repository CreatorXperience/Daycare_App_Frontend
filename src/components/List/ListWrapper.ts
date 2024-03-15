import styled from "styled-components";
import { colors } from "../../constants/colors";

const ListWrapper = styled.div`
margin-top: 10px;

.list-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;

    .left {
        font-size: 14px;
        font-weight: 900;
    }

    .right {
        color: ${colors.primary.darkGreen};
        font-size: 12px;
        font-weight: 900;
    }

}`


export default ListWrapper