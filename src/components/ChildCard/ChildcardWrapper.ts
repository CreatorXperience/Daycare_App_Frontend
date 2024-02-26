import styled from "styled-components";

const ChildCardWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;

  .child-card-container {
    width: 90%;
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
    font-weight: 900;
    padding-left: 5px;
  }
  .child-card-timing span {
    font-size: 14px;
    font-weight: 400;
  }
  .btn {
    padding: 5px  0px;
    width: 60px;
    font-size: 18px;
    color: white;
    background: linear-gradient(180deg, #B5FFBC 0%, rgba(5, 200, 10, 0.74) 100%);
    border: none;
    border-radius: 10px;
    font-weight: 900;
  }
`;


export default ChildCardWrapper