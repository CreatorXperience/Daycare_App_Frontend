import ICONS from "../../constants/icons";
import CardWrapper from "./CardWrapper";

const OwnADayCare = () => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="circled-img">{ICONS.promoIcon()}</div>
        <div className="text">
          <p>Own a Day Care ? </p>
          <div className="percent-text">Create a profile now!</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default OwnADayCare;


