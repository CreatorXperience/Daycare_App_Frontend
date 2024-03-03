import styled from "styled-components";
import { colors } from "../../constants/colors";

const RadioInpputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  .radio-cont {
    border: 1px solid ${colors.primary.textGray};
    width: 170px;
    height: 60px;
    /* padding: 10px 15px; */
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 22px;
  }
  #gender {
    margin: 0px 20px 0px 20px;
  }
  input[type="radio"] {
    width: 19px;
    height: 20px;
  }
  .active-text {
    color: blue;
  }
  .radio-cont.active {
    border: 1px solid blue;
    width: 170px;
    height: 60px;
    /* padding: 10px 15px; */
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 22px;
  }
`;

export default RadioInpputWrapper;