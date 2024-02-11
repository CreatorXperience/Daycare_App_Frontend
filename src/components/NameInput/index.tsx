import NameInputWrapper from "./NameInputWrapper";
const NameInput = () => {
    return (
      <NameInputWrapper>
        <div className="input-wrapper">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input type="text" id="name" />
        </div>
      </NameInputWrapper>
    );
}
 
export default NameInput;

