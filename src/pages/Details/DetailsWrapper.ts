import styled from "styled-components"
import { colors } from "../../constants/colors"

const DetailsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 100vh;
    position: relative;


    .DetailsBody{
        height: 78%;
        overflow-y: auto;
    }

    .btn-container{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 5px;
        position: fixed;
        bottom: 0;
        background-color: ${colors.primary.white};
        padding: 5px;


        .register { 
        width: 80%;
        padding: 12px;
        height: 50px;
        background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
        margin: 0 auto;
        border: none;
        color: ${colors.primary.white};
        font-size: 20px;
        border-radius: 8px;
        margin-bottom: 2px;
    }
    }

`

export default  DetailsWrapper