import ICONS from "../../constants/icons";
import TeacherProfileWrapper from "./TeacherProfileWrapper";

const TeacherProfile = () => {
  return (
    <TeacherProfileWrapper>
      <div className="profile-container">
        <div className="profile-detail">
          <div className="image"></div>
          <div className="profile-text-detail">
            <h1 className="profile-name">David Joe</h1>
            <div className="profile-rating">
              {ICONS.starIcon()}
            </div>
          </div>
        </div>
        <div className="profile-photo-btn-container">
          <div className="profile-photo-btn">
            <p>Change profile photo</p>
          </div>
        </div>
      </div>
    </TeacherProfileWrapper>
  );
};

export default TeacherProfile;


