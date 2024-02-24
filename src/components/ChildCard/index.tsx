import { colors } from "../../constants/colors";
import ChildCardWrapper from "./ChildcardWrapper";
import {FaDollarSign}  from "react-icons/fa"

type TTitle = {
  title: string,
  isOpen: boolean | undefined,
  amount: number
}
const ProfileDetailsTitle = ({title, isOpen, amount}: TTitle) => {
  return (
    <ChildCardWrapper>
      <div className="child-card-container">
        <div className="child-card-timing">
          <h1 className="title">{title}</h1>
          <p>
            <FaDollarSign color={colors.primary.yellow} />
           {amount} <span>/1 Hours</span>
          </p>
        </div>
        <div className="child-card-btn">
          <input type="button" value={isOpen? "Open": "Close"} className="btn"/>
        </div>
      </div>
    </ChildCardWrapper>
  );
};

export default ProfileDetailsTitle;

