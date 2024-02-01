import styled from "styled-components";


type TProps = {
  data: {
    percentage: string;
    message: string;
    desc: string;
  };
};
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

const CardWrapper = styled.div`
  .card {
    display: flex;
    width: 100%;
    height: 139px;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 0;
    background: linear-gradient(
      180deg,
      #72b5f1 0%,
      rgba(23, 118, 202, 0.83) 131.58%
    );
    border-radius: 10px;
    .percent {
      border: 1px solid rgba(23, 118, 202, 0.83);
      width: 17%;
      height: 62px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-width: 10px;
      border-right: 10px solid #fbd350;
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      background-color: white;
    }
    .text h1 {
     color: #FFF;
font-family: "Jockey One";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
    .text p {
      color: #fff;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 149px;
    }
  }
`;
