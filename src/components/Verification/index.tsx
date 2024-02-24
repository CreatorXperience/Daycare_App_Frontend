import { GoClock, GoClockFill, GoStar, GoVerified } from "react-icons/go";
import ICONS from "../../constants/icons";
import VerificationWrapper from "./VerificationWrapper";
import { colors } from "../../constants/colors";


type TVerification = {
  rating: number,
  isVerified?: string
}
const ProfileDetailsVerification = ({isVerified,rating}: TVerification) => {
  return (
    <VerificationWrapper>
      <div className="verify-container">
        <div className="verify-rate">
          <div className="icons-wrapper">
           <GoStar size="20px" color={colors.primary.yellow}/>
          </div>
          <p>{rating}</p>
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


