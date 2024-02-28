import styled from "styled-components";
import { colors } from "../../constants/colors";

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
`

export default SearchWrapper