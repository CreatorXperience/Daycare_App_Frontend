import styled from "styled-components";

const BabyCardImage = () => {
  return (
    <BabyCardWrapper>
      <div className="card-wrapper">
        <div className="card-img"></div>
      </div>
    </BabyCardWrapper>
  );
};

export default BabyCardImage;

const BabyCardWrapper = styled.div`
  .card-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .card-img {
    background-image: url("https://www.momooze.com/wp-content/uploads/short-haircuts-for-little-girls-6.jpg.webp");
    width: 300px;
    height: 200px;
    background-size: cover;
    border-radius: 10px;
    background-position:center center;
  }
`;
