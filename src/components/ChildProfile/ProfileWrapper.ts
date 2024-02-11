import styled from "styled-components";
import { colors } from "../../constants/colors";

const ProfileWrapper = styled.div`
  .profile-container {
    background-color: ${colors.primary.lightGray};
    width: 100%;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
    justify-content: space-between;
    display: flex;
  }
  .profile-detail {
    width: 100%;
    display: flex;
  }

  .image {
    background-image: url("https://www.momooze.com/wp-content/uploads/short-haircuts-for-little-girls-6.jpg.webp");
    width: 100px;
    height: 100px;
    background-size: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  .profile-distance-wrapper {
    width: 50%;
  }

  .profile-distance {
    width: 100%;
    padding: 5px;
    text-align: center;
    border-radius: 50px;
    background: linear-gradient(
      180deg,
      #72b5f1 0%,
      rgba(23, 118, 202, 0.83) 131.58%
    );
    color: white;
    font-weight: 400;
    font-size: 16px;
  }

  .profile-name {
    font-size: 20px;
  }
  .profile-text-detail {
    margin-top: 10px;
  }
`;
export default ProfileWrapper