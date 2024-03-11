import { GoChevronLeft,GoKebabHorizontal, GoPencil, GoUpload } from "react-icons/go";
import UserInputDataWrapper from "./UserInputDataWrapper";
import NameInput from "../../components/NameInput";
import { colors } from "../../constants/colors";
import Header from "../../components/Header";
import RadioInput from "../../components/RadioInput";
import LocationSelect from "../../components/LocationSelect";
import HourSelect from "../../components/HourSelect";
import useUploadEffect from "./hooks/useUploadEffect";



const ChildCareProfile = () => {
const {form,
  handleMimicUpload,
  handleSelect,
  isDaycareOwner,
  isUpdateLoading,
  onAmountChanged,
  onClosingTimeChange,
  onDescriptionChange,
  onFileUploaded,
  onMobileNumberChange,
  onOpeningTimeChange,
  onRoleChange,
  onSubmit,
  onTitleChange,
  radioRef,
  setForm,
  isLoading,
  label,
  setLabel,
  error,
  ref,
  errorResponse
} = useUploadEffect()
  

  return (
    <UserInputDataWrapper id={form.image}>
      <div className="profile-wrapper">
       <Header title="Profile">
        <GoChevronLeft />
        <GoKebabHorizontal  />
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
            onChangeHandler={onTitleChange}
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
            onChangeHandler={onMobileNumberChange}
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
            onChangeHandler={onAmountChanged}
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
            onChangeHandler={onRoleChange}
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
        {errorResponse ?  <div>{errorResponse.message}</div> : ""}
        </form>

        <div className="btnwrapper">
            <button type="submit" onClick={(e)=> onSubmit(e)} className="save-btn">{isUpdateLoading ? "saving...":  "save"}</button>
            </div>
      </div>
    </UserInputDataWrapper>
  );
};

export default ChildCareProfile;
