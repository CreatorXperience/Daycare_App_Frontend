import styled from "styled-components";
import { ENDPOINT, URL } from "../../constants/endpoints";

const ResultCardWrapper = styled.div<{image?: string}>`
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin-top: 60px; */
    height:  auto;


    .result-card-cont {
        width: 90%;
        height: 200px;

        .result-image {
        background-image:  url(${props => props.image ? URL().endpoint+ENDPOINT.upload+"/"+props.image: ""});
        background-size: cover;
        width: 100%;
        height: 120px;
        border-radius: 12px;
    }

      

    .result-details {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 5px;
        height: 80px;
  

        .details {
            
            .title {
                font-size: 18px;
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
    }



`

export default ResultCardWrapper
