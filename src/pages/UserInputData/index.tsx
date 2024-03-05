import UserInputDataWrapper from "./UserInputDataWrapper";
import NameInput from "../../components/NameInput";
import { GoChevronLeft,GoKebabHorizontal, GoPencil, GoUpload } from "react-icons/go";
import { colors } from "../../constants/colors";
import Header from "../../components/Header";
import { useEffect,  useRef, useState, useTransition } from "react";
import useUploadImage from "./hooks/useUploadImage";
import RadioInput from "../../components/RadioInput";
import LocationSelect from "../../components/LocationSelect";
import { TLoginResponse } from "../Auth/Login/type";
import useGetProfile from "./hooks/useGetProfile";
import HourSelect from "../../components/HourSelect";
import { useSearchParams } from "react-router-dom";
import {TChild, TExtendChildcare} from "./type";
import useSaveProfile from "./hooks/useSaveProfile";
import ReactDOM from "react-dom"
import _ from "lodash" 
import { start } from "repl";




const ChildCareProfile = () => {

  const ref = useRef<HTMLInputElement | null>(null)
  const {response, mutateUpload,error,isLoading} = useUploadImage()
  const [id,setId] = useState<string>()
  const radioRef = useRef<HTMLDivElement | null>(null) 
  const [isDaycareOwner, setIsDaycareOwner] =  useState<boolean>()
  const {setId:setUserId, data} = useGetProfile()
  const [label, setLabel] = useSearchParams()
  const {mutateProfile, response:profileResponse} = useSaveProfile()

  const [form, setForm] = useState<TExtendChildcare<TChild & {location:string},"_id">>({
    amount: "",
    description: "",
    exactLocation: "",
    image: "",
    isOpen: false,
    location: "",
    owner: "",
    phonenumber: "",
    rating: 3,
    title: "",
    userId: "",
    from: "",
    to: "",
    role:""
  })

  

  const handleMimicUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    if(ref && ref.current){
      ref.current.click()
    }
  }

  const onFileUploaded = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    if(e.target.files){
    mutateUpload(e.target.files[0])
    }
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>)=>{
 
    setForm((prev)=> ({...prev, location: e.target.value}))
  }


  useEffect(()=>{
    if(response){
      setId(response.id)
    }
  },[response])

  useEffect(()=>{
    let user = localStorage.getItem("DayCareuserLoginInfo")
    if(user){
      let parse = JSON.parse(user) as TLoginResponse
      setIsDaycareOwner(parse.message.day_care_owner)
      setUserId(parse.message._id)
    }
  },[])

  useEffect(()=>{
if(data){
  let currentData = {..._.omit(data,["_id","isVerified","__v","perDuration"]),location: data.exactLocation, amount: data.amount.toString()}
    setForm(currentData)

  setId(form.image)
}
  }, [data])

    // useEffect(()=>{
    //   if(profileResponse){
    
    //     let currentData = {..._.omit(profileResponse,["_id","isVerified","__v"]),location: profileResponse.exactLocation, amount: profileResponse.amount}
    //     setForm(currentData)
    //     setId(form.image)
    //   }
    //     }, [profileResponse])
  
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
     setForm((prev)=> ({...prev, title: e.target.value}))
  }

  const onMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setForm((prev)=> ({...prev, phonenumber: e.target.value}))
  }

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=> {
    e.preventDefault()
    setForm((prev)=> ({...prev, description: e.target.value}))
  }

  const onAmountChanged = (e: React.ChangeEvent<HTMLInputElement>)=>{
e.preventDefault()
setForm((prev)=> ({...prev, amount: e.target.value}))
  }

  const onOpeningTimeChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    e.preventDefault()
    setForm((prev)=> ({...prev, from: e.target.value}))
  }
  const onClosingTimeChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    e.preventDefault()
    setForm((prev)=> ({...prev, to: e.target.value}))
  }


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
  
    let sanitizedData = _.omitBy(form, (value)=> value === "") as Partial<TExtendChildcare<TChild & {location:string},"_id">>
    mutateProfile(_.omit(sanitizedData, ["exactLocation"]))
  }

  const onRoleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setForm((prev)=> ({...prev, role: e.target.value}))
  }
  console.log(form)

  return (
    <UserInputDataWrapper id={id}>
      <div className="profile-wrapper">
       <Header title="Profile">
        <GoChevronLeft />
        <GoKebabHorizontal />
       </Header>

       <form onSubmit={(e)=> onSubmit(e)}>
        <input type="file" style={{display: "none"}}  ref={ref}  onChange={(e)=> onFileUploaded(e)}/>
        <div className="image-container">
        {isLoading && <div className="loader"></div>}
        <button className="upload-btn" onClick={(e)=> handleMimicUpload(e)}>
          <GoUpload /> 
        </button>
        </div>
   

       {error ?  <div>{error.message}</div> : ""}

        <div className="username-wrapper">

          <NameInput
            type="text"
            label="Daycare's name"
            placeholder="Enter the name of your daycare "
            onChangeHandler={(e)=> onTitleChange(e)}
            value={form.title}
            disabled={isDaycareOwner && label.get("activeInput") !== "Daycare's name"  ? true : false}
          >
            {isDaycareOwner && <GoPencil
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
              onClick={()=> setLabel({activeInput: "Daycare's name"})}
            />}
          </NameInput>
          <NameInput
            type="number"
            label="Phone number"
            placeholder="Enter your mobile number"
            onChangeHandler={(e)=> onMobileNumberChange(e)}
            value={form.phonenumber}
            disabled={isDaycareOwner && label.get("activeInput") !== "Phone number"  ? true : false}
          >
          {isDaycareOwner ?  <GoPencil
              type="text"
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
              onClick={()=> setLabel({activeInput: "Phone number"})}
            /> : ''}
          </NameInput>

          <div className="description-area">
            <div className="description-title">Description</div>
          <textarea placeholder="Describe your daycare." value={form.description} disabled={isDaycareOwner && label.get("activeInput") !== "textarea"  ? true : false} 
         onClick={()=> setLabel({activeInput: "textarea"})} onChange={(e)=> onDescriptionChange(e)}></textarea>
         <div className="pen">
         <GoPencil
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
              onClick={()=> setLabel({activeInput: "textarea"})}
            /> 
         </div>
          </div>

          <div className="radio-block">
          <div className="open">Are you Currently Available ?</div>
          <div className="radio-group" ref={radioRef}>
          <RadioInput setForm={setForm}  label="Open" name="Are you open"  isChecked={form.isOpen}/>
          <RadioInput  setForm={setForm} label="Close" name="Are you open" isChecked={form.isOpen} />
          </div>
          </div>

          <div className="location-wrapper">
          <div className="location-title">Location</div>
          <LocationSelect  handleSelect={handleSelect}  disabled={isDaycareOwner && label.get("activeInput") !== "location"  ? true : false} value={form.exactLocation}>
           <GoPencil
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
              onClick={()=> setLabel({activeInput: "location"})}
            /> 
            </LocationSelect>
          </div>

          <NameInput
            type="number"
            label="Charges per hour ($)"
            placeholder="How much do you charge per hour"
            onChangeHandler={(e)=> onAmountChanged(e)}
            value={form.amount}
            disabled={isDaycareOwner && label.get("activeInput") !== "per-hour"  ? true : false}
          >
           {isDaycareOwner &&  <GoPencil
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
              onClick={()=> setLabel({activeInput: "per-hour"})}
            />}
          </NameInput>


          <NameInput
            type="text"
            label="Role"
            placeholder="e.g Daycare owner , Teacher"
            onChangeHandler={(e)=> onRoleChange(e)}
            value={form.role}
            disabled={isDaycareOwner && label.get("activeInput") !== "role"  ? true : false}
          >
           {isDaycareOwner &&  <GoPencil
              className="person"
              color={`${colors.primary.lightGray}`}
              fontSize="22px"
              onClick={()=> setLabel({activeInput: "role"})}
            />}
          </NameInput>

          <div className="location-wrapper">
          <div className="location-title">Opening hour</div>
          <HourSelect onTimeChange={onOpeningTimeChange} disabled={isDaycareOwner && label.get("activeInput") !== "opening"  ? true : false} userOpeningHour={+form.from}>
          <GoPencil
                  className="person"
                  color={`${colors.primary.lightGray}`}
                  fontSize="22px"
                  onClick={()=> setLabel({activeInput: "opening"})}
                />
          </HourSelect>
          </div>

          <div className="location-wrapper">
          <div className="location-title">Closing hour</div>
          <HourSelect onTimeChange={onClosingTimeChange} disabled={isDaycareOwner && label.get("activeInput") !== "closing"  ? true : false} userClosingHour={+form.to}>
          <GoPencil
                  className="person"
                  color={`${colors.primary.lightGray}`}
                  fontSize="22px"
                  onClick={()=> setLabel({activeInput: "closing"})}
                />
          </HourSelect>
          </div>
        </div>

        <button type="submit">save</button>
        </form>
      </div>
    </UserInputDataWrapper>
  );
};

export default ChildCareProfile;
