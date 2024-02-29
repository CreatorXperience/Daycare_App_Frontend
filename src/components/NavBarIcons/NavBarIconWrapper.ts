import styled from "styled-components";
import { colors } from "../../constants/colors";

const NavBarIconWrapper = styled.div`
  width: 100%;
  height: 60px;

  .nav-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    border: none;
    box-shadow: ${colors.primary.shadow};
  }

  .icon-wrapper {
    text-align: center;
    width: 25%;
    cursor: pointer;
  }
  
  .image {
    height: 100%;
  }
  .image p {
    color: ${colors.primary.textGray};
    font-weight: bolder;
    font-size: 14px;
  }
  .image img {
    width: 25%;
    height: 30px;
  }
`;

export default NavBarIconWrapper