import styled from "styled-components";
import { colors } from "../../constants/colors";

const TeacherProfileWrapper = styled.div`
  .profile-container {
    width: 100%;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
    justify-content: space-between;
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

  .profile-name {
    font-size: 20px;
  }
  .profile-text-detail {
    margin-top: 10px;
  }

  .profile-photo-btn {
    background-color: ${colors.primary.grayishWhite};
    padding: 8px;
    display: flex;
    justify-content: center;
    width: 60%;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 900;
    color: ${colors.primary.cyan};
    margin-left: 20px;
  }
  .profile-photo-btn-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export default TeacherProfileWrapper