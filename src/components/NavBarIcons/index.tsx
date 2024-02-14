import ICONS from "../../constants/icons";
import NavBarIconWrapper from "./NavBarIconWrapper";

const NavBarIcon = () => {
  return (
    <NavBarIconWrapper>
      <div className="nav-wrapper">
        <div className="icon-wrapper">
          <div className="image">
            {ICONS.homeIcon()}
            <p>Home</p>
          </div>
      
        </div>
        <div className="icon-wrapper">
          <div className="image">
           {ICONS.listIcon()}
           <p>To-Do-List</p>
          </div>
     
        </div>
        <div className="icon-wrapper">
          <div className="image">
           {ICONS.locationIcon()}
           <p>Map</p>
          </div>
    
        </div>
        <div className="icon-wrapper">
          <div className="image">
            {ICONS.profileIcon()}
            <p>User</p>
          </div>
        </div>
      </div>
    </NavBarIconWrapper>
  );
};

export default NavBarIcon;


