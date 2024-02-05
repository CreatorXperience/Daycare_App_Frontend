import styled from "styled-components";
import ratingImg from "../../constants/images/rating.png";

type profileProps = {
  profileData: {
    profileName: string,
    profileAge: string,
    profileRating: string,
    profileDistance:string,
  }
}


const ChildProfile = ({profileData}:profileProps) => {
  return (
    <ProfileWrapper>
      <div className="profile-container">
        <div className="profile-detail">
          <div className="image"></div>
          <div className="profile-text-detail">
            <h1 className="profile-name">{profileData.profileName}</h1>
            <p className="profile-age">{profileData.profileAge}</p>
            <div className="profile-rating">
              <img src={ratingImg} alt="rating.png" />
            </div>
          </div>
        </div>
        <div className="profile-distance-wrapper">
          <div className="profile-distance">{profileData.profileDistance}</div>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default ChildProfile;

const ProfileWrapper = styled.div`
  .profile-container {
    background-color: rgba(153, 155, 157, 0.2);
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
    padding: 10px;
    display: flex;
    justify-content: center;
    place-items: center;
    border-radius: 50px;
    background: linear-gradient(
      180deg,
      #72b5f1 0%,
      rgba(23, 118, 202, 0.83) 131.58%
    );
    color: white;
    font-weight: 400;
    font-size: 20px;
    justify-content: center;
    place-items: center;
  }

  .profile-name {
    font-size: 25px;
  }
  .profile-text-detail {
    margin-top: 10px;
  }
`;
