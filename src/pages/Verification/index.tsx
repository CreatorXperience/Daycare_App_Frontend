import NameInput from "../../components/NameInput"
import { colors } from "../../constants/colors"
import { GoLock, GoMail } from "react-icons/go"
import ICONS from "../../constants/icons"
import VerificationWrapper from "./VerificationWrapper"
import useOtp from "./hooks/useOtp"


const Verification = ()=>{
    const {handleChangeOtp,handleSubmitOtp,otp,errorResponse,isLoading} = useOtp()

 
    return (
        <VerificationWrapper>
                <div>{ICONS.brandIcon1("80px")} </div>
               <div className="dev">Device verification</div>
        <div className="verification-container">
             <div className="input-cont">
           
            <form onSubmit={(e)=> handleSubmitOtp(e)}>
                {errorResponse ? <div className="error"> {errorResponse.message}</div>: ""}
                <NameInput onChangeHandler={(e)=> handleChangeOtp(e)} label="" placeholder="Input six digits otp">
                <GoLock className="eye" color={`${colors.primary.lightGray}`} fontSize="22px" />
                </NameInput>

                    <button className="verifybtn" type="submit" disabled={isLoading ? true : false} style={{backgroundColor: `${isLoading? `${colors.primary.darkGreen}`: `${colors.primary.cyan}`}`}}>{isLoading ? "loading": "Verify"}</button>
                    
            </form>
             </div>

             <div className="message">
                    
                    <div><GoMail className="eye" color={`${colors.primary.black}`} fontSize="22px" /> <span>we just sent
                        you a message via email with your authentication code . Enter the code in the form above to 
                        verify you identity
                        </span> </div>
                </div>
        </div>
        </VerificationWrapper>
    )
}


export default Verification

