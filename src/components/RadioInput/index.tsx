
import { useEffect } from "react";
import RadioInpputWrapper from "./RadioInputWrapper";
import { TRadioInput } from "./type";
import { useSearchParams } from "react-router-dom";



const RadioInput = ({ name, label,isChecked, setForm}: TRadioInput) => {

  const [searchParams,setSearchParams] = useSearchParams()

  const handleClick = () => {
setSearchParams({label})
setForm((prev)=> ({...prev, isOpen: searchParams.get("label") !== "Open" ? true : false }))
  };

  const handleLabel = (classname: string)=>{
   if(label === searchParams.get("label")){
    return classname
   }
   return ""
  }

  useEffect(()=>{
    if(isChecked){
     return setSearchParams({label: "Open"})
    }
    setSearchParams({label: "Close"})
  }, [isChecked])

  return (
    <RadioInpputWrapper>
      <div className="wrapper">
      <div className={`radio-cont ${handleLabel("active")}`}>
        <div>
          <input type="radio"  name={name} id="gender" onChange={handleClick} checked={label === searchParams.get("label") ? true : false} />
        </div>

        <p className={`${handleLabel("active-text")} text`} id="tex">
          {label}
        </p>
      </div>
      </div>

    </RadioInpputWrapper>
  );
};


export default RadioInput;

