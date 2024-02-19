import styled from "styled-components";
import { colors } from "../../constants/colors";

const NameInputWrapper = styled.div`
  .input-wrapper {
    padding: 10px;
    width: 100%;
  }
  .label {
    width: 100%;
    font-size: 16px;
    font-weight: 900;
    color: ${colors.primary.black};
  }

  .input-container{
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid ${colors.primary.lightGray};
    outline: 0;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;

    .input {
    width: 100%;
    font-size: 16px;
    padding: 8px;
    font-weight: 700;
    border-radius: 10px;
    outline: none;
    border: none;
    position: relative;

    #name {
      width: 90%;
    font-size: 16px;
    padding: 8px;
    font-weight: 700;
    border-radius: 10px;
    outline: none;
    border: none;
    }

    .dot-container {
      display: flex;
      padding: 12px;
         .dots {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${colors.primary.black};
      margin: 2px;
    }
    }
 
  }

  }


`;

export default NameInputWrapper