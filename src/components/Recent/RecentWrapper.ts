import styled from "styled-components";
import { colors } from "../../constants/colors";

const RecentWrapper = styled.div<{isexpand: string, data: string[] | undefined}>`
    width: 100%;
    height: ${props => props.isexpand === "true" && props.data ?  "" : "auto"};

    .cont-wrapper {
    width: 100%;
    height: ${props => props.isexpand === "true" && props.data  ? "200px" : "auto"};
    display: flex;
    align-items: center;
    flex-flow: column;
    overflow-y: ${props => props.isexpand === "true" && props.data  ?  "auto" :  "hidden" } ;

        .recent-cont {
            width: 95%;
            height: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 5px;
           
           
            
            
            .recent-search {
                display: flex;

                .searchTerm {
                    margin-left:20px
                }
            }
        }
    }

    .btn-cont {
        width: 100%;
        display: flex;
        justify-content: center;

        .see-more{
            width: 90%;
            margin-top: 15px;
            padding: 12px;
            border-radius: 10px;
            border-color: ${colors.primary.cyan};
            background-color: ${colors.primary.lightCyan};
            font-size: 18px;
            color: ${colors.primary.cyan};
            font-weight: 400;
            border-width: 0.8px;
            
        }
    }
`

export default RecentWrapper