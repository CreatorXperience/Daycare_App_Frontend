import styled from "styled-components";

const VerificationWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 10px;

  .verify-container {
    width: 88%;
    display: flex;
    justify-content: space-between;
  }
  .verify-rate {
    display: flex;
    text-align: center;
  }
  .icons-wrapper img {
    width: 20px;
  }
  .verify-rate p {
    font-size: 14px;
    font-weight: 900;
  }
`;

export default VerificationWrapper