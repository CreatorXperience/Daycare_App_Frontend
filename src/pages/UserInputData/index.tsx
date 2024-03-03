import UserInputDataWrapper from "./UserInputDataWrapper";
import NameInput from "../../components/NameInput";
import { GoChevronLeft, GoKebabHorizontal, GoPerson } from "react-icons/go";
import { colors } from "../../constants/colors";
import Header from "../../components/Header";

const ChildCareProfile = () => {

  return (
    <UserInputDataWrapper>
      <div className="input-wrapper">
       <Header title="Profile">
        <GoChevronLeft />
        <GoKebabHorizontal />
       </Header>

        <div className="username-wrapper">
          <NameInput
            label="Your Name"
            placeholder="Enter your name"
            onChangeHandler={()=> ""}
          >
            <GoPerson
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
            />
          </NameInput>
          <NameInput
            label="Children Name"
            placeholder="Enter your children name"
            onChangeHandler={()=> ""}
          >
            <GoPerson
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
            />
          </NameInput>
        </div>
      </div>
    </UserInputDataWrapper>
  );
};

export default ChildCareProfile;
