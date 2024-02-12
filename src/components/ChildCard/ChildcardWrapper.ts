import styled from "styled-components";

const ChildCardWrapper = styled.div`
  .child-card-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
  }

  .child-card-timing h1 {
    font-size: 25px;
    padding: 5px;
  }

  .child-card-timing p {
    font-size: 20px;
    font-weight: 600;
    padding-left: 5px;
  }
  .child-card-timing span {
    font-size: 20px;
    font-weight: 400;
  }
  .btn {
    padding: 5px  0px;
    width: 80px;
    font-size: 20px;
    color: white;
    background: linear-gradient(
      180deg,
      #72b5f1 0%,
      rgba(23, 118, 202, 0.83) 131.58%
    );
    border: none;
    border-radius: 10px;
  }
`;


export default ChildCardWrapper