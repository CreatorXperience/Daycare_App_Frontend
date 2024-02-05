import styled from "styled-components";
const ChildCard = () => {
  return (
    <ChildCardWrapper>
      <div className="child-card-container">
        <div className="child-card-timing">
          <h1>Childcard</h1>
          <p>
            5.59 <span>/1 Hours</span>
          </p>
        </div>
        <div className="child-card-btn">
          <input type="button" value="Open" className="btn"/>
        </div>
      </div>
    </ChildCardWrapper>
  );
};

export default ChildCard;

const ChildCardWrapper = styled.div`
  .child-card-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
  }
  .child-card-timing p {
    font-size: 25px;
    font-weight: 600;
  }
  .child-card-timing span {
    font-size: 20px;
    font-weight: 400;
  }
  .btn {
    padding: 15px 0px;
    width: 100px;
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
