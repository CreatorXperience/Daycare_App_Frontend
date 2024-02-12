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
      #72b5f1 0%,
      rgba(23, 118, 202, 0.83) 131.58%
    );
    border-radius: 10px;

    .percent {
      border: 1px solid rgba(23, 118, 202, 0.83);
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.primary.white};
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-width: 10px;
      border-right: 10px solid #fbd350;
      color: ${colors.primary.black};
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      background-color:${colors.primary.white};
      padding: 10px;
    }

    .text h1 {
     color: #FFF;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 0px 0px 10px 0px;
    }
    
    .text p {
      color:${colors.primary.white};
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 149px;
    }
  }
`;

export default CardWrapper