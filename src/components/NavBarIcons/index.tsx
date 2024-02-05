import styled from "styled-components";
import homeIcon from "../../constants/images/homeicon.png";
import todoIcon from "../../constants/images/todolisticon.png";
import locationIcon from "../../constants/images/locationicon.png";
import userIcon from "../../constants/images/usericon.png";

const NavBarIcon = () => {
  return (
    <NavBarIconWrapper>
      <div className="nav-wrapper">
        <div className="icon-wrapper">
          <div className="image">
            <img src={homeIcon} alt={homeIcon} />
          </div>
          <p>Home</p>
        </div>
        <div className="icon-wrapper">
          <div className="image">
            <img src={todoIcon} alt={todoIcon} />
          </div>
          <p>To-Do-List</p>
        </div>
        <div className="icon-wrapper">
          <div className="image">
            <img src={locationIcon} alt={locationIcon} />
          </div>
          <p>Map</p>
        </div>
        <div className="icon-wrapper">
          <div className="image">
            <img src={userIcon} alt={userIcon} />
          </div>
          <p>User</p>
        </div>
      </div>
    </NavBarIconWrapper>
  );
};

export default NavBarIcon;

const NavBarIconWrapper = styled.div`
  .nav-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    border: none;
    box-shadow:-2px -2px 4px rgba(153, 155, 157),2px 2px 4px rgba(153, 155, 157);
  }

  .icon-wrapper {
    text-align: center;
    width: 100%;
    cursor: pointer;
  }
  .icon-wrapper p {
    color: rgba(23, 118, 202, 0.83);
    font-weight: 900;
    font-size: 16px;
  }
  .image img {
    width: 30px;
  }
`;
