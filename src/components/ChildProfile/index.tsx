import ICONS from "../../constants/icons";
import ProfileWrapper from "./ProfileWrapper";
import TProfileProps from "./type";

const ChildProfile = ({profileData}:TProfileProps) => {
  return (
    <ProfileWrapper>
      <div className="profile-container">
        <div className="profile-detail">
          <div className="image"></div>
          <div className="profile-text-detail">
            <h1 className="profile-name">{profileData.profileName}</h1>
            <p className="profile-age">{profileData.profileAge}</p>
            <div className="profile-rating">
             {ICONS.starIcon()}
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

