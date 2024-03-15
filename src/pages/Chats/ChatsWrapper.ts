import styled from "styled-components";
import { colors } from "../../constants/colors";

const ChatsWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-flow: column;
position: relative;

.msg-cont {
width: 100%;
height: 80%;
padding: 12px;
overflow-y: auto;

.wrapper{
    width: 100%;
    margin-bottom: 20px;
}
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: ${colors.primary.white};
}
`

export default ChatsWrapper