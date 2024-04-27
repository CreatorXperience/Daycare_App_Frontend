import { GoHomeFill, GoPersonFill } from "react-icons/go";
import NavBarIconWrapper from "./NavBarIconWrapper";
import { colors } from "../../constants/colors";
import { FaComment} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBarIcon = () => {
  return (
    <NavBarIconWrapper>
      <div className="nav-wrapper">
        <div className="icon-wrapper">
        <Link to={"/home"}>
          <div className="image">
            <GoHomeFill color={colors.primary.cyan} size={"20px"} />
         <p>Home</p>
          </div>
          </Link>
        </div>
        <div className="icon-wrapper">
        <Link to={"/chats"}>
          <div className="image">
           <FaComment color={colors.primary.cyan} size={"20px"} />
         <p>Chats</p>
          </div>
         </Link>
    
        </div>
        <div className="icon-wrapper">
        <Link to={"/userprofile"}>
          <div className="image">
            <GoPersonFill  color={colors.primary.cyan} size={"20px"}/>
         <p>Profile</p>
          </div>
          </Link>
        </div>
      </div>
    </NavBarIconWrapper>
  );
};

export default NavBarIcon;


