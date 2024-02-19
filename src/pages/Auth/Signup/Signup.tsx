import { colors } from "../../../constants/colors"
import LoginMessage from "../../../components/LoginMessage"
import NameInput from "../../../components/NameInput"
import {GoEye, GoChevronLeft, GoMail,GoPerson} from "react-icons/go"
import FormAction from "../../../components/FormAction"
import SignUpWrapper from "./SignUpWrapper"
import useAuth from "../hooks/useAuth"


const Signup = ()=>{
  const {
    handleChangeEmail,
    handleChangePassword,
    handleSubmitSignUpData, 
    handleChangeName, 
    setIsPasswordVisible, 
    isPasswordVisible,
    userPayload,
    errorResponse,
  } =  useAuth()



  return (
    <SignUpWrapper>
    <div className="back-wrapper">
        <div className="back-btn"><GoChevronLeft color={colors.primary.black} /></div>

    <LoginMessage title="Create Account"  message="Fill in  your Identity or continue with Google" />
        <div className="input-wrapper">
      <form onSubmit={(e)=> handleSubmitSignUpData(e)}>
        <NameInput label="Name" placeholder="Enter Your Name" onChangeHandler={handleChangeName}>
         <GoPerson className="eye" color={`${colors.primary.lightGray}`} fontSize="22px" />
         </NameInput>

         <NameInput label="Email" placeholder="example@gmail.com" onChangeHandler={handleChangeEmail}>
         <GoMail className="eye" color={`${colors.primary.lightGray}`} fontSize="22px" />
         </NameInput>

         <NameInput  label="Password" placeholder="Enter Your Password" setIsPasswordVisible={setIsPasswordVisible} onChangeHandler={handleChangePassword} isPasswordVisible={isPasswordVisible} pass={userPayload.password}>
         <GoEye className="eye" color={`${colors.primary.lightGray}`} onClick={()=> setIsPasswordVisible(!isPasswordVisible)} fontSize="22px" />
         </NameInput>

          <div className="error">{errorResponse?.message ? errorResponse.message : ""}</div>
         <FormAction text="Create Account" />
      </form>
        </div>
    </div>

    </SignUpWrapper>
  )
}

export default Signup

