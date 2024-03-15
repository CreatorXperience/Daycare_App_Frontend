import styled from "styled-components";
import { URL } from "../../constants/endpoints";


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
    background-image:  url(${props => props.id ? URL().endpoint+/upload/+props.id: "https://i.pinimg.com/564x/f1/8c/2d/f18c2db587a424b237257922f36bd1b5.jpg"})
  }
`;


export default BabyCardWrapper