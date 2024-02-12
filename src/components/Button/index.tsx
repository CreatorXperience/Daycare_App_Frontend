import ButtonWrapper from "./ButtonWrapper";

const Button = ({ text }: {text:string}) => {
  return (
    <ButtonWrapper>
      <div className="buttons">
        <span>{text}</span>
      </div>
    </ButtonWrapper>
  );
};

export default Button;


