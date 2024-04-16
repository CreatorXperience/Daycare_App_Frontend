import { colors } from "../../../constants/colors"
import LoginMessage from "../../../components/LoginMessage"
import NameInput from "../../../components/NameInput"
import {GoEye, GoChevronLeft, GoMail} from "react-icons/go"
import FormAction from "../../../components/FormAction"
import SignInWrapper from "./SigninWrapper"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Login = ()=>{
const {
  handleChangeEmail,
  handleChangePassword, 
  handleSubmitLoginData, 
  isPasswordVisible, 
  setIsPasswordVisible, 
  userPayload,
  LoginError,
} = useAuth()

const navigate = useNavigate()

  return (
    <SignInWrapper>
    <div className="back-wrapper">
        <div className="back-btn"><GoChevronLeft onClick={()=>  navigate(-1)} color={colors.primary.black}/></div>

    <LoginMessage title="Welcome Back"  message="Fill in  your email and password or continue with google" />
        <div className="input-wrapper">
        <form onSubmit={(e)=> handleSubmitLoginData(e)}>
         <NameInput type="email" label="Email" placeholder="example@gmail.com" onChangeHandler={handleChangeEmail} value={userPayload.email}>
         <GoMail className="eye" color={`${colors.primary.lightGray}`} fontSize="22px" />
         </NameInput>


         <NameInput type="password" label="Password" placeholder="Enter Your Password" setIsPasswordVisible={setIsPasswordVisible} onChangeHandler={handleChangePassword} isPasswordVisible={isPasswordVisible} pass={userPayload.password} >
         <GoEye className="eye" color={`${colors.primary.lightGray}`} fontSize="22px" />
         </NameInput>

         <div className="error">{LoginError?.message ? LoginError.message : ""}</div>
         
         <FormAction text="Login" link="Signup"/>

         </form>
        </div>
    </div>

    </SignInWrapper>
  )
}

export default Login


