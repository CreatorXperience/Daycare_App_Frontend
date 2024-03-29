import React, { ReactNode } from "react";
import NameInputWrapper from "./NameInputWrapper";

type TNameInputIcon = {
  children?: ReactNode,
  label: string,
  placeholder: string,
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isPasswordVisible?: boolean;
  pass?: string,
  setIsPasswordVisible?: React.Dispatch<React.SetStateAction<boolean>>,
  borderradius?: string,
  bg?: string,
  value?: string | number,
  type: string,
  disabled?: boolean
}

const NameInput = React.memo(({
  children,
  label,
  placeholder,
  onChangeHandler, 
  isPasswordVisible,
  pass,
  setIsPasswordVisible,
  type,
  borderradius,
  bg,
  value,
  disabled
}: TNameInputIcon) => {
  return (
    <NameInputWrapper borderradius={borderradius} bg={bg}>
      <div className="input-wrapper" onClick={() => {
        if (setIsPasswordVisible)
          setIsPasswordVisible(!isPasswordVisible)
      }}>
        <label htmlFor="name" className="label">
          {label}
        </label>
        <div className="input-container">
          <div className="input">
            {label.toLocaleLowerCase() !== "password" && 
              <input 
                value={value ? value : ""}  
                type={type} 
                id="name"  
                placeholder={placeholder} 
                onChange={(e)=> onChangeHandler(e)} 
                autoComplete="true" 
                disabled={disabled ? true: false}
              />
            }
            {label.toLocaleLowerCase() === "password" && isPasswordVisible && 
              <input 
                value={pass}  
                type="text" 
                id="name" 
                placeholder={placeholder} 
                autoFocus={true} 
                onChange={(e)=> onChangeHandler(e)} 
                autoComplete="true"
              />
            }
            {label.toLocaleLowerCase() === "password" && !isPasswordVisible &&
              <div className="dot-container">
                {pass?.split("").map((item,i) => (
                  <div className="dots" key={i*Math.random()*pass.length}></div>
                ))}
              </div>
            }
          </div>
          {children}
        </div>
      </div>
    </NameInputWrapper>
  );
});

export default NameInput;
