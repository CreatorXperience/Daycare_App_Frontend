import styled from "styled-components";
import { colors } from "../../constants/colors";

const ButtonWrapper = styled.button`
 background: linear-gradient(
      180deg,
      #72b5f1 0%,
      rgba(23, 118, 202, 0.83) 131.58%
    );
    border: none;
    outline: none;
    border-radius: 10px;
  .buttons {
    font-family: "Poppins", sans-serif;
    height: 37px;
    display: grid;
    place-content: center;
    cursor: pointer;


    span {
      color:${colors.primary.white};
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export default ButtonWrapper