import { colors } from "../../constants/colors";
import ChildCardWrapper from "./ChildcardWrapper";
import {FaDollarSign}  from "react-icons/fa"
const ProfileDetailsTitle = () => {
  return (
    <ChildCardWrapper>
      <div className="child-card-container">
        <div className="child-card-timing">
          <h1 className="title">Childcard</h1>
          <p>
            <FaDollarSign color={colors.primary.yellow} />
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

export default ProfileDetailsTitle;

