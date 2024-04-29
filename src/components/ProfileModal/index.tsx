import { useEffect, useRef } from "react"
import useHandleForm from "../../pages/EditUserprofile/hooks/useHandleForm"
import UserRadioInput from "../UserRadioInput"
import NameInput from "../NameInput"
import ProfileModalWrapper from "./ProfileModalWrapper"

const ProfileModal = ()=>{

    const {
      onAgeChange,
      onChildNameChange,
      onDropChange,
      onNameChange,
      onRoleChange,
      onSubmit,
      onTakeChange,
      form,
      setForm,
      data,
      isPostLoading,
      isPatchLoading,
      error
    } = useHandleForm()


    useEffect(()=>{
        if(data){
            setForm(({...data,gender: data.gender === "Male" ? true: false}))
            localStorage.setItem("user_profile", JSON.stringify(data))
            
        }else{
            let user_profile = localStorage.getItem("user_profile")
            if(user_profile){
                let parse_profile = JSON.parse(user_profile)
                setForm(({...parse_profile,gender: parse_profile.gender === "Male" ? true: false}))
            }
        }
    },[data])

    const radioRef = useRef<HTMLDivElement | null>(null)
return(
    <ProfileModalWrapper>
  <div className="profile-wrapper">
    <div className="profile-title">Setup Profile</div>
   <form onSubmit={(e)=> onSubmit(e)}>

   {error ?  <div className="err">{error.message}</div> : ""}

    <div className="username-wrapper">
      
      <NameInput      
        type="text"
        label="Your name"
        placeholder="Enter your name"
        onChangeHandler={onNameChange}
        value={form?.name}
        
      >
      </NameInput>
      <NameInput
        type="text"
        label="Children Name"
        placeholder="Enter your child's name"
        onChangeHandler={onChildNameChange}
        value={form?.children_name}

      >

      </NameInput>


      <div className="radio-block">
      <div className="open">Child's Gender</div>
      <div className="radio-group" ref={radioRef}>
      <UserRadioInput setForm={setForm}  label="Male" name="Gender"  isChecked={form?.gender}/>
      <UserRadioInput  setForm={setForm} label="Female" name="Gender" isChecked={form?.gender} />
      </div>
      </div>


      <NameInput
        type="number"
        label="Child's Age"
        placeholder="Enter age"
        onChangeHandler={onAgeChange}
        value={form?.age}
      >
      </NameInput>


      <NameInput
        type="text"
        label="Role"
        placeholder="e.g Parent, Guardian"
        onChangeHandler={onRoleChange}
        value={form?.role}
      >
      </NameInput>

      <div className="hour">
      <div className="location-wrapper">
      <label className="location-title"htmlFor="appt">Drop</label>

       <input type="time" id="appt" name="appt" value={form.drop} onChange={(e)=> onDropChange(e)}/>

      </div>


      <div className="location-wrapper">
      <label className="location-title"htmlFor="appt">Take</label>

       <input type="time" id="appt" value={form.take} name="appt" onChange={(e)=> onTakeChange(e)}/>

      </div>


      </div>


    </div>
    {/* {errorResponse ?  <div>{errorResponse.message}</div> : ""} */}
    </form>


    <div className="btnwrapper">
   
   <button type="submit" onClick={(e)=> onSubmit(e)} className="save-btn"> {isPostLoading || isPatchLoading ? "saving...":  "save"}</button>
   </div>

  </div>
</ProfileModalWrapper>
)
}

export default ProfileModal