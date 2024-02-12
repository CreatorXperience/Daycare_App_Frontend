import ICONS from "../../constants/icons";
import UserNameInputWrapper from "./UserNameInputWrapper";

const UserNameInput = () => {
    return (
      <UserNameInputWrapper>
        <div className="input-wrapper">
          <label htmlFor="username" className="label">
            Name
          </label>
                <input type="text" id="username" />
                {ICONS.inputIcon()}
        </div>
      </UserNameInputWrapper>
    );
}
 
export default UserNameInput;

