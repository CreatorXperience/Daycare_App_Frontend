import styled from "styled-components";
import oneStar from "../../constants/images/oneStar.png";

const Verification = () => {
  return (
    <VerificationWrapper>
      <div className="verify-container">
        <div className="verify-rate">
          <div className="image">
            <img src={oneStar} alt={oneStar} />
          </div>
          <p>4,8</p>
        </div>
        <div className="verify-rate">
          <div className="image">
            <img src={oneStar} alt={oneStar} />
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

const VerificationWrapper = styled.div`
  .verify-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .verify-rate {
    display: flex;
    text-align: center;
  }
  .image img {
    width: 20px;
  }
  .verify-rate p {
    font-size: 20px;
  }
`;
