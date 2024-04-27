import { useSearchParams } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import RadioInpputWrapper from "../RadioInput/RadioInputWrapper";
import { TUserFormProps } from "../../pages/EditUserprofile/type";

type TUserRadioInput = {
    name: string;
    label: string;
    isChecked?: boolean,
    setForm: React.Dispatch<React.SetStateAction<TUserFormProps>>

}

const UserRadioInput = ({ name, label,isChecked, setForm}: TUserRadioInput)=>{

  const [searchParams,setSearchParams] = useSearchParams()

  const handleClick = () => {
setSearchParams({label})
setForm((prev)=> ({...prev, gender: searchParams.get("label") !== "Male" ? true : false }))
  };

  const handleLabel = (classname: string)=>{
   if(label === searchParams.get("label")){
    return classname
   }
   return ""
  }

  useEffect(()=>{
    if(isChecked){
     return setSearchParams({label: "Male"})
    }
    setSearchParams({label: "Female"})
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
}

export default memo(UserRadioInput)