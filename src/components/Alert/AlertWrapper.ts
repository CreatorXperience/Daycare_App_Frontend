import styled from "styled-components";
import { colors } from "../../constants/colors";

const AlertWrapper = styled.div`
width: 100%;
height: auto;
position: fixed;
top: 0;

.alert-container {
    width: 100%;
    height: 60px;
    background: ${colors.primary.lightCyan};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
}
`

export default AlertWrapper