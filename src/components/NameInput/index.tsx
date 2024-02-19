import { ReactNode } from "react";
import NameInputWrapper from "./NameInputWrapper";

type TNameInputIcon = {
  children: ReactNode,
  label: string,
  placeholder: string,
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>)=> void,
  isPasswordVisible?: boolean;
  pass?: string,
  setIsPasswordVisible?: React.Dispatch<React.SetStateAction<boolean>>
}
const NameInput = ({children, label,placeholder, onChangeHandler, isPasswordVisible,pass,setIsPasswordVisible}: TNameInputIcon) => {
    return (
      <NameInputWrapper>
        <div className="input-wrapper" onClick={()=> {
            if(setIsPasswordVisible)
            setIsPasswordVisible(!isPasswordVisible)
          }}>
         
          <label htmlFor="name" className="label">
            {label}
          </label>

          <div className="input-container" >
            <div className="input">         
             {label.toLocaleLowerCase() !== "password" && <input  type="text" id="name" placeholder={placeholder} onChange={(e)=> onChangeHandler(e)}/>}
             {label.toLocaleLowerCase() === "password" && isPasswordVisible && <input value={pass}  type="text" id="name" placeholder={placeholder} autoFocus={true} onChange={(e)=> onChangeHandler(e)}/>}
              {label.toLocaleLowerCase() === "password" && !isPasswordVisible &&
               <div className="dot-container">
                  {
                    pass?.split("").map((item,i)=>{
                      return <div className="dots" key={i*Math.random()*pass.length}></div>
                    })
                  }
              
              </div>}
            </div>
  
          {children}
          </div>

        </div>
      </NameInputWrapper>
    );
}
 
export default NameInput;

