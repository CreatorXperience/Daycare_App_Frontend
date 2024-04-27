import styled from "styled-components";
import { ENDPOINT, URL } from "../../constants/endpoints";


const BabyCardWrapper = styled.div<{id?: string}>`
  .card-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .card-img {
    width: 90%;
    height: 200px;
    background-size: cover;
    border-radius: 10px;
    background-position:center center;
    background-image:  url(${props => props.id ? URL().endpoint+ENDPOINT.upload+"/"+props.id: ""})
  }
`;


export default BabyCardWrapper