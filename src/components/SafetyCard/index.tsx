import CardWrapper from "./CardWrapper";
import TProps from "./type";

const SafetyCard = ({ data }: TProps) => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="percent">{data.percentage}</div>
        <div className="text">
          <h1>{data.message}</h1>
                  <p>{data.desc} </p>
             
        </div>
      </div>
    </CardWrapper>
  );
};

export default SafetyCard;


