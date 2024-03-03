import styled from "styled-components";
import { colors } from "../../constants/colors";

const SelectInputWrapper = styled.div`
  width: 100%;
  padding: 20px;

  #age {
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.primary.textGray};
    outline: none;
    padding: 15px;
    border-radius: 15px;
  }

`;
export default SelectInputWrapper;