import styled from "styled-components";
import { colors } from "../../constants/colors";
import { ENDPOINT, URL } from "../../constants/endpoints";

const ImageModalWrapper = styled.div<{image?: string}>`
    width: 100%;
    height: 100%;
    background-color: #00000032;
    display: flex;
    justify-content: center;
    align-items: center;

.image-cont {
width: 80%;
height: 40%;
background-color: ${colors.primary.white};
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid ${colors.primary.red};
    background-image:  url(${props => props.image ? URL().endpoint+ENDPOINT.userprofile+"/"+props.image: ""});
    background-size: cover;
}
.text {
    text-align: center;
    width: 50%;
}
.action {
    button {
        margin: 20px;
        padding: 5px;
        outline: none;
        border: none;
        outline-color: ${colors.primary.red};
        outline-style: solid;
        outline-width: 2px;
        color: ${colors.primary.black};
        border-radius: 5px;
    }
}
}


`

export default ImageModalWrapper