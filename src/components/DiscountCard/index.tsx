import ICONS from "../../constants/icons";
import CardWrapper from "./CardWrapper";
import TDataProps from "./type";


const DiscountCard = ({dataGreen}:TDataProps) => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="circled-img">{ICONS.promoIcon()}</div>
        <div className="text">
          <p>{dataGreen.message}</p>
          <div className="percent-text">{dataGreen.desc}</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default DiscountCard;


