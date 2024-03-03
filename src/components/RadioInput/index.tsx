import RadioInpputWrapper from "./RadioInputWrapper";
import { useState } from "react";
import { TRadioInput } from "./type";



const RadioInput = ({ name, label }: TRadioInput) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);
  return (
    <RadioInpputWrapper>
      <div className={`radio-cont ${isActive ? "active" : ""}`}>
        <div>
          <input type="radio" name={name} id="gender" onClick={handleClick} />
        </div>

        <p className={`${isActive ? "active-text" : ""}`} id="tex">
          {label}
        </p>
      </div>
    </RadioInpputWrapper>
  );
};

export default RadioInput;