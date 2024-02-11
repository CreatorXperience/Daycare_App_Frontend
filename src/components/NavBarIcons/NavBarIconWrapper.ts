import styled from "styled-components";
import { colors } from "../../constants/colors";

const NavBarIconWrapper = styled.div`
  .nav-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    border: none;
    box-shadow: ${colors.primary.shadow} 
  }

  .icon-wrapper {
    text-align: center;
    width: 100%;
    cursor: pointer;
  }
  .icon-wrapper p {
    color: ${colors.primary.cyan};
    font-weight: 900;
    font-size: 16px;
  }
  .image img {
    width: 30px;
  }
`;

export default NavBarIconWrapper