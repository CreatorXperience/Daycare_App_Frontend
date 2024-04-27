import styled from "styled-components";
import { colors } from "../../constants/colors";

const RadioInpputWrapper = styled.div`
  width: 100%;
  padding: 10px;

  .wrapper{
    width: 100%;

    .radio-cont {
    border: 2px solid ${colors.primary.lightGray};
    width: 100%;
    /* height: 60px; */
    padding: 8px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    font-size: 22px;
  }

  }

  #gender {
    margin: 0px 20px 0px 20px;
  }
  input[type="radio"] {
    width: 19px;
    height: 20px;
  }


  .text{
    font-size: 16px;
    font-weight: bold;
  }
  .active-text {
    color: ${colors.primary.cyan};
    background-color: ${colors.primary.lightCyan};
  }
  .radio-cont.active {
    border: 2px solid ${colors.primary.cyan};

    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 22px;

    background-color: ${colors.primary.lightCyan};
    accent-color: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
  }
`;

export default RadioInpputWrapper;

