import styled from "styled-components";
import { colors } from "../../constants/colors";

const ChildCareCardWrapper = styled.div`
.card-wrapper {
    width: 100%;
    height: 200px;
    margin-top: 10px;
    display: flex;
    overflow-x: auto;


    .card-skeleton{
        width: 220px;
        height: 120px;
        background-color: ${colors.primary.grayishWhite};
        border-radius: 12px;
        margin: 10px;
        flex-shrink: 0;
        position: relative;

         .card-light {
        position: absolute;
        width: 60px;
        height: 120px;
        background-color: ${colors.primary.white};
        filter: blur(30px);
        animation: move ease-in-out 1s infinite;
        animation-delay: 10;
        left: 0px;
    }
 
    @keyframes move {
    0%{
        transform: translateX(0%);
    }    
    
    25%{
        transform: translateX(80%)
    }

    75%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0%);
    }
    }
    }
}`

export default ChildCareCardWrapper