import styled from "styled-components";
import ratingImg from "../../constants/images/rating.png";

const TeacherProfile = () => {
  return (
    <ProfileWrapper>
      <div className="profile-container">
        <div className="profile-detail">
          <div className="image"></div>
          <div className="profile-text-detail">
            <h1 className="profile-name">ncjdnjns</h1>
            <div className="profile-rating">
              <img src={ratingImg} alt="rating.png" />
            </div>
          </div>
        </div>
        <div className="profile-photo-btn-container">
          <div className="profile-photo-btn">
            <p>Change profile photo</p>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default TeacherProfile;

const ProfileWrapper = styled.div`
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
    font-size: 25px;
  }
  .profile-text-detail {
    margin-top: 10px;
  }

  .profile-photo-btn {
    background-color: rgba(153, 155, 157, 0.2);
    padding: 10px;
    display: flex;
    justify-content: center;
    width: 60%;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 900;
    color: rgba(23, 118, 202, 0.83);
  }
  .profile-photo-btn-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;
