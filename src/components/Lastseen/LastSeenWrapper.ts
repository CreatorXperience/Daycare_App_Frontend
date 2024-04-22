import styled from "styled-components";
import { colors } from "../../constants/colors";
import { URL } from "../../constants/endpoints";

const LastSeenWrapper = styled.div<{id?: String | undefined}>`
width: 100%;
padding: 12px;

.seen-container {
    width: 100%;
    height: 90px;
    display: flex;

.image{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-image: url(${props => props.id ?  URL().endpoint+"/upload/"+props.id : ""});
    background-size: cover;
    margin:5px;
}
}

`

export default LastSeenWrapper