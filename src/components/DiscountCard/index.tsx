import styled from "styled-components";

type DataProps= {
    dataGreen : {
        image: string,
    message: string,
    desc: string,
    }
}
const DiscountCard = ({dataGreen}:DataProps) => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="circled-img"> </div>
        <div className="text">
          <p>{dataGreen.message}</p>
          <div className="percent-text">{dataGreen.desc}</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default DiscountCard;

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
      #b5ffbc 0%,
      rgba(9, 211, 28, 0.74) 100%
    );
    border-radius: 10px;
    .circled-img {
      border: 1px solid rgba(9, 211, 28, 0.74);
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

    .text p {
      color: #fff;
      font-family: "Jockey One";
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      width: 150px;
    }
    .percent-text {
      color: #fff;
      font-family: "Jockey One";
      font-size: 40px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
  }
`;
