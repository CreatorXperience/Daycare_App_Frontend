import ICONS from "../../constants/icons";
import NavBarIconWrapper from "./NavBarIconWrapper";

const NavBarIcon = () => {
  return (
    <NavBarIconWrapper>
      <div className="nav-wrapper">
        <div className="icon-wrapper">
          <div className="image">
            {ICONS.homeIcon()}
          </div>
          <p>Home</p>
        </div>
        <div className="icon-wrapper">
          <div className="image">
           {ICONS.listIcon()}
          </div>
          <p>To-Do-List</p>
        </div>
        <div className="icon-wrapper">
          <div className="image">
           {ICONS.locationIcon()}
          </div>
          <p>Map</p>
        </div>
        <div className="icon-wrapper">
          <div className="image">
            {ICONS.profileIcon()}
          </div>
          <p>User</p>
        </div>
      </div>
    </NavBarIconWrapper>
  );
};

export default NavBarIcon;


