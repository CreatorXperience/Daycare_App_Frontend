import styled from "styled-components";
import { colors } from "../../constants/colors";
import { ENDPOINT, URL } from "../../constants/endpoints";

const LastSeenWrapper = styled.div<{id?: String | undefined}>`
width: 40%;
padding: 12px;
flex-shrink: 0;

.seen-container {
    width: 100%;
    height: 90px;
    display: flex;

.image{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-image:  url(${props => props.id ? URL().endpoint+ENDPOINT.upload+"/"+props.id: ""});

    background-size: cover;
    margin:5px;
}
}

`

export default LastSeenWrapper