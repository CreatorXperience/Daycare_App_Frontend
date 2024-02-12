import styled from "styled-components";
import { colors } from "../../constants/colors";

const CardWrapper = styled.div`
  .card {
    display: flex;
    width: 100%;
    height: 139px;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      #b5ffbc 0%,
      rgba(9, 211, 28, 0.74) 100%
    );
    border-radius: 10px;
    .circled-img {
      border: 1px solid rgba(9, 211, 28, 0.74);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-width: 10px;
      border-right: 10px solid #fbd350;
      color: ${colors.primary.black};
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      background-color:${colors.primary.white};
      padding: 10px;
    }

    .text p {
      color: #fff;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      width: 150px;
    }
    .percent-text {
      color: #fff;
      font-family: Poppins;
      font-size: 40px;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
    }
  }
`;

export default CardWrapper