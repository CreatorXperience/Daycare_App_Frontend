import styled from "styled-components";

const ButtonWrapper = styled.div`
  .buttons {
    font-family: "Poppins", sans-serif;
    width: 40%;
    height: 37px;
    flex-shrink: 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      #72b5f1 0%,
      rgba(23, 118, 202, 0.83) 131.58%
    );

    span {
      color: #fff;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export default ButtonWrapper