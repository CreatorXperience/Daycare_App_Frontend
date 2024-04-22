import styled from "styled-components";
import { colors } from "../../constants/colors";
import { URL } from "../../constants/endpoints";

const SearchWrapper = styled.div`
    width: 98%;
    height: 80vh;
    display: flex;
    justify-content: center;
   background-color: ${colors.primary.white};
   
    .input-cont {
        width: 90%;
        display: flex;
        flex-flow: column;
        overflow-y: auto;

        .seen-title{
        font-size: 18px;
        font-weight: bolder;
        padding: 12px;
        margin-top: 10px;
        }

        .last-search-cont{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .clear{
                font-size: 14px;
                font-weight: 600;
                color: red;
                margin-top: 10px;
            }
        }
    }

    .last-seen {
        width: 100%;
        display: flex;


        .skeleton {
    width: 28%;
    height: 90px;
    border-radius: 15px;
    background-color: ${colors.primary.lightGray};
    background-size: cover;
    margin:5px;
    position: relative;

    .light {
        position: absolute;
        width: 60px;
        height: 100%;
        background-color: white;
        filter: blur(30px);
        animation: move ease-in-out 1s infinite;
        animation-delay: 10;
        left: 0px;
    }
 
    @keyframes move {
    0%{
        left: 0px;
    }    
    
    25%{
        left: 20px;
    }

    50%{
        left: 40px;
    }

    75%{
       left: 60px 
    }
    100%{
        right: 0px;
    }
    }
}
    }
`

export default SearchWrapper