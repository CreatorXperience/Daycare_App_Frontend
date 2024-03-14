import styled from "styled-components";
import { URL } from "../../constants/endpoints";

const ResultCardWrapper = styled.div<{image?: string}>`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 60px;


    .result-card-cont {
        width: 90%;
        height: 150px;
    }

    .result-image {
        background-image: url(${props => props.image ? URL().endpoint+/upload/+props.image: "https://i.pinimg.com/564x/f1/8c/2d/f18c2db587a424b237257922f36bd1b5.jpg"});
        background-size: cover;
        width: 100%;
        height: 90%;
        border-radius: 12px;
    }

    .result-details {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 5px;

        .details {
            .title {
                font-size: 20px;
                font-weight: bolder;
            }
        }

        .amount {
            display: flex;
            justify-content: center;
            align-items: center;

            .digit {
                font-size: 25px;
                font-weight: bolder;
            }
        }
    }

`

export default ResultCardWrapper
