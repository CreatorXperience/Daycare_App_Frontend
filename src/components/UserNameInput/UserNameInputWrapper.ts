import styled from "styled-components";
import { colors } from "../../constants/colors";

const UserNameInputWrapper = styled.div`
  .input-wrapper {
    padding: 10px;
    width: 100%;
    position: relative;
  }
  .label {
    width: 100%;
    font-size: 16px;
    font-weight: 200;
    color: ${colors.primary.black};
  }
  #username {
    width: 100%;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid ${colors.primary.cyan};
    outline: 0;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
  }
  img{
    position: absolute;
right: 55px;
    top: 60px;
  }
`;

export default UserNameInputWrapper