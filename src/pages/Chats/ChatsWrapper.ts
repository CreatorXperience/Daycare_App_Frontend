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

.loading-cont {
    width: 80%;
    height: 50px;
    box-sizing: border-box;
    padding: 12px;
    background-color: ${colors.primary.white};
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
    border-radius: 12px;
    margin: 0 auto;
    outline-width: .5px;
    outline-color: ${colors.primary.red};
    outline-style: solid;
    p {
        font-weight: bolder;
        font-size: 14px;
    }
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