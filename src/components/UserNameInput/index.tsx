import styled from "styled-components";
import userNameIcon from '../../constants/images/userNameIcon.png'
const UserNameInput = () => {
    return (
      <UserNameInputWrapper>
        <div className="input-wrapper">
          <label htmlFor="username" className="label">
            Name
          </label>
                <input type="text" id="username" />
                <img src={userNameIcon} alt={userNameIcon} className="usernameiconimg"/>
        </div>
      </UserNameInputWrapper>
    );
}
 
export default UserNameInput;

const UserNameInputWrapper = styled.div`
  .input-wrapper {
    padding: 10px;
    width: 100%;
    position: relative;
  }
  .label {
    width: 100%;
    font-size: 20px;
    font-weight: 900;
    color: #000000;
  }
  #username {
    width: 100%;
    font-size: 25px;
    padding: 10px;
    font-weight: 700;
    border: 1px solid rgba(23, 118, 202, 0.83);
    outline: 0;
    border-radius: 10px;
    margin-top: 10px;
  }
  .usernameiconimg{
    position: absolute;
right: 55px;
    top: 60px;
  }
`;