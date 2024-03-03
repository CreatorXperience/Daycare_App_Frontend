import { GoHomeFill, GoNote, GoPersonFill } from "react-icons/go";
import NavBarIconWrapper from "./NavBarIconWrapper";
import { colors } from "../../constants/colors";
import { FaComment} from "react-icons/fa";

const NavBarIcon = () => {
  return (
    <NavBarIconWrapper>
      <div className="nav-wrapper">
        <div className="icon-wrapper">
          <div className="image">
            <GoHomeFill color={colors.primary.cyan} size={"20px"} />
            <p>Home</p>
          </div>
      
        </div>
        <div className="icon-wrapper">
          <div className="image">
       <GoNote color={colors.primary.cyan} size={"20px"} />
           <p>Article</p>
          </div>
     
        </div>
        <div className="icon-wrapper">
          <div className="image">
           <FaComment color={colors.primary.cyan} size={"20px"} />
           <p>Chat</p>
          </div>
    
        </div>
        <div className="icon-wrapper">
          <div className="image">
            <GoPersonFill  color={colors.primary.cyan} size={"20px"}/>
            <p>Profile</p>
          </div>
        </div>
      </div>
    </NavBarIconWrapper>
  );
};

export default NavBarIcon;


