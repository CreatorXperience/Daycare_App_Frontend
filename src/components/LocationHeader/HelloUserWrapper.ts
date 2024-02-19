import styled from "styled-components";
import { colors } from "../../constants/colors";

const LocationNavWrapper =styled.div`
    .location-nav-wrapper{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;

        .location-header{

         .location {
                font-size: 18px;
                font-weight: 400;

                select {
                    background-color: white ;
                    outline: none;
                    border: none;
                    width: 10px;
                    color: ${colors.primary.yellow}

                    option{
                        width: 100px;
                    }
                }
        }

        .user{
            font-size: 20px;
            font-weight: 800;
        }
        }
      
      .search {
        margin-right: 10px;
      }
    }

`

export default LocationNavWrapper