import ICONS from "../../constants/icons";
import CardWrapper from "./CardWrapper";
import TDataProps from "./type";


const DiscountCard = ({data}:TDataProps) => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="circled-img">{ICONS.promoIcon()}</div>
        <div className="text">
          <p>Register and get
Discount up to</p>
          <div className="percent-text">{data.discount}</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default DiscountCard;


