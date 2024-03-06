import styled from "styled-components";
import { colors } from "../../constants/colors";

const LocationSelectWrapper = styled.div`
width: 100%;

     .box {
                    width: 100%;
                    height: 60px;
                    border: 1px solid red;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 8px;
                    border: 2px solid ${colors.primary.lightGray};
                    border-radius: 12px;
                    padding: 12px;
                    margin-bottom: 30px;

                    select {
                    width: 95%;
                    height: 40px;
                    background-color: ${colors.primary.white};
                    border: none;
                    padding: 8px;
                    outline: none;
                  }
                  }
`

export default LocationSelectWrapper