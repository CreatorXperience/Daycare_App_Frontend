import UserInputDataWrapper from "./UserInputDataWrapper";
import NameInput from "../../components/NameInput";
import { GoChevronLeft, GoPerson } from "react-icons/go";
import { colors } from "../../constants/colors";
import useAuth from "../Auth/hooks/useAuth";
import LoginMessage from "../../components/LoginMessage";
import RadioInput from "../../components/RadioInput";
import SelectInput from "../../components/SelectInput";
import Button from "../../components/Button";

const UserInputData = () => {
  const { handleChangeName } = useAuth();

  return (
    <UserInputDataWrapper>
      <div className="input-wrapper">
        <div className="back-message">
          <div className="back-btn">
            <GoChevronLeft color={colors.primary.black} />
          </div>
          <div className="message">
            <LoginMessage title="Input Data" message=""></LoginMessage>
          </div>
        </div>

        <div className="username-wrapper">
          <NameInput
            label="Your Name"
            placeholder="Enter your name"
            onChangeHandler={handleChangeName}
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
            onChangeHandler={handleChangeName}
          >
            <GoPerson
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
            />
          </NameInput>
          <LoginMessage title="Children Gender" message=""></LoginMessage>
          <div className="gender">
            <RadioInput name="gender" label="Male" />
            <RadioInput name="gender" label="Female" />
          </div>
          <LoginMessage title="Children Age" message=""></LoginMessage>
          <SelectInput
            name="age"
            id="age"
            placeholder="Select Age"
            options={[
              { value: "one", label: "1" },
              { value: "two", label: "2" },
              { value: "three", label: "3" },
              { value: "four", label: "4" },
              { value: "five", label: "5" },
              { value: "six", label: "6" },
              { value: "seven", label: "7" },
              { value: "eight", label: "8" },
              { value: "nine", label: "9" },
              { value: "ten", label: "10" },
              { value: "eleven", label: "11" },
              { value: "twelve", label: "12" },
            ]}
          />
          <LoginMessage title="Time" message=""></LoginMessage>
          <div className="moments">
            <SelectInput
              name="drop"
              id="drop"
              placeholder="Drop"
              options={[
                { value: "7am", label: "7am" },
                { value: "8am", label: "8am" },
                { value: "9am", label: "9am" },
                { value: "10am", label: "10am" },
                { value: "11am", label: "11am" },
                { value: "12pm", label: "12pm" },
                { value: "1pm", label: "1pm" },
                { value: "2pm", label: "2pm" },
                { value: "3pm", label: "3pm" },
                { value: "4pm", label: "4pm" },
                { value: "5pm", label: "5pm" },
              ]}
            />
            <SelectInput
              name="take"
              id="take"
              placeholder="Take"
              options={[
                { value: "8am", label: "8am" },
                { value: "9am", label: "9am" },
                { value: "10am", label: "10am" },
                { value: "11am", label: "11am" },
                { value: "12pm", label: "12pm" },
                { value: "1pm", label: "1pm" },
                { value: "2pm", label: "2pm" },
                { value: "3pm", label: "3pm" },
                { value: "4pm", label: "4pm" },
                { value: "5pm", label: "5pm" },
                { value: "6pm", label: "6pm" },
              ]}
            />
          </div>
          <div className="check-out-btn">
            <Button text="Checkout" />
          </div>
        </div>
      </div>
    </UserInputDataWrapper>
  );
};

export default UserInputData;
