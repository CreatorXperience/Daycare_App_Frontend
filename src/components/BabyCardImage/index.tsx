import { memo } from "react";
import BabyCardWrapper from "./BabyCardWrapper";
import { TProfileProps } from "./type";


const ProfileDetailsImage = ({id}: TProfileProps) => {
  return (
    <BabyCardWrapper id={id}>
      <div className="card-wrapper">
        <div className="card-img"></div>
      </div>
    </BabyCardWrapper>
  );
};

export default memo(ProfileDetailsImage);