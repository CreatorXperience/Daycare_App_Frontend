import { GoClock, GoClockFill, GoStar, GoVerified } from "react-icons/go";
import ICONS from "../../constants/icons";
import VerificationWrapper from "./VerificationWrapper";
import { colors } from "../../constants/colors";

const ProfileDetailsVerification = () => {
  return (
    <VerificationWrapper>
      <div className="verify-container">
        <div className="verify-rate">
          <div className="icons-wrapper">
           <GoStar size="20px" color={colors.primary.yellow}/>
          </div>
          <p>4,8</p>
        </div>
        <div className="verify-rate">
          <div className="icons-wrapper">
            <GoClock  color={colors.primary.cyan}/>
          </div>
          <p>7PM - 10AM</p>
        </div>
        <div className="verify-rate">
        <GoVerified  color={colors.primary.darkGreen}/>
          <p>Verified</p>
        </div>
      </div>
    </VerificationWrapper>
  );
};

export default ProfileDetailsVerification;


