import CardWrapper from "./CardWrapper";
import TProps from "./type";

const SafetyCard = ({ data }: TProps) => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="percent">{data.percentage}</div>
        <div className="text">
          <h1>Your Child Safety</h1>
                  <p>trust your child with us safety is our priority</p>
             
        </div>
      </div>
    </CardWrapper>
  );
};

export default SafetyCard;


