import styled from "styled-components";
import { colors } from "../../constants/colors";

const UserInputDataWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  .input-wrapper {
    width: 100%;
    height: auto;
    padding: 12px;
    padding-top: 20px;
  }

  .back-message {
    display: flex;
    width: 100%;
    text-align: center;
    .message {
      width: 100%;
      display: flex;
      justify-content: center;
      place-items: center;
      margin-top: 10px;
    }
  }

  .username-wrapper {
    padding-top: 10px;
  }

  .back-btn {
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${colors.primary.grayishWhite};
  }

  .gender {
    display: flex;
  }
  .moments {
    display: flex;
  }

  #drop {
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.primary.textGray};
    outline: none;
    padding: 15px;
    border-radius: 15px;
  }
  #take {
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.primary.textGray};
    outline: none;
    padding: 15px;
    border-radius: 15px;
  }

  .check-out-btn {
    width: 100%;
    display: grid;
    place-content: center;

    .buttons {
      width: 300px;
      padding: 30px;
    }
  }
`;

export default UserInputDataWrapper;
