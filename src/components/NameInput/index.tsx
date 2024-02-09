import styled from "styled-components";
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

const NameInputWrapper = styled.div`
  .input-wrapper {
    padding: 10px;
    width: 100%;
  }
  .label {
    width: 100%;
    font-size: 20px;
    font-weight: 900;
    color: rgba(153, 155, 157);
  }
  #name {
    width: 100%;
    font-size: 25px;
    padding: 10px;
    font-weight: 700;
    border: 1px solid rgba(153, 155, 157);
    outline: 0;
    border-radius: 10px;
    margin-top: 10px;
  }
`;