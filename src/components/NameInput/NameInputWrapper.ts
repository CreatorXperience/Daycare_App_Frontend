import styled from "styled-components";
import { colors } from "../../constants/colors";

const NameInputWrapper = styled.div`
  .input-wrapper {
    padding: 10px;
    width: 100%;
  }
  .label {
    width: 100%;
    font-size: 20px;
    font-weight: 900;
    color: ${colors.primary.textGray};
  }
  #name {
    width: 100%;
    font-size: 25px;
    padding: 10px;
    font-weight: 700;
    border: 1px solid ${colors.primary.cyan};
    outline: 0;
    border-radius: 10px;
    margin-top: 10px;
  }
`;

export default NameInputWrapper