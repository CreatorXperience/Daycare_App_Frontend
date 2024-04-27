import styled from "styled-components";
import { ENDPOINT, URL } from "../../constants/endpoints";

const CardWrapper = styled.div<{id?: string}>`
width: 60%;
flex-shrink: 0;
margin: 5px;

        .card {
        width: 100%;   
        height: 100%;
        flex-shrink: 0;

        .image {
        width: 100%;
        height: 60%;
        border-radius: 10px;
    
        background-image:  url(${props => props.id ? URL().endpoint+ENDPOINT.upload+"/"+props.id: ""});
        background-size: cover;
    }

    .info {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        padding: 5px;

        .childcare-name{
            font-size: 14px;
            font-weight: 600;
        }
    }
}
`

export default CardWrapper