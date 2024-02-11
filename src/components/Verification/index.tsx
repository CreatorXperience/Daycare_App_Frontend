import ICONS from "../../constants/icons";
import VerificationWrapper from "./VerificationWrapper";

const Verification = () => {
  return (
    <VerificationWrapper>
      <div className="verify-container">
        <div className="verify-rate">
          <div className="image">
            {ICONS.starIcon()}
          </div>
          <p>4,8</p>
        </div>
        <div className="verify-rate">
          <div className="image">
          {ICONS.starIcon()}
          </div>
          <p>7PM - 10AM</p>
        </div>
        <div className="verify-rate">
          <p>Verified</p>
        </div>
      </div>
    </VerificationWrapper>
  );
};

export default Verification;


