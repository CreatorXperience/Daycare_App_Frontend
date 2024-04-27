import { Link } from "react-router-dom";
import ICONS from "../../constants/icons";
import CardWrapper from "./CardWrapper";

const OwnADayCare = () => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="circled-img">{ICONS.promoIcon()}</div>
        <div className="text">
          <p>Do you have a day care ? </p>
          <Link to={"/profile"}><div className="percent-text">Create a child care profile now!</div></Link>
        </div>
      </div>
    </CardWrapper>
  );
};

export default OwnADayCare;


