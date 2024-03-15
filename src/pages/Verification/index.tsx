import NameInput from "../../components/NameInput"
import { colors } from "../../constants/colors"
import { GoLock, GoMail } from "react-icons/go"
import ICONS from "../../constants/icons"
import VerificationWrapper from "./VerificationWrapper"
import useOtp from "./hooks/useOtp"
import useResendOtp from "./hooks/useResendOtp"


const Verification = ()=>{
    const {handleChangeOtp,handleSubmitOtp,errorResponse,isLoading,otp, userOtp} = useOtp()
    const {setOtpPayload,isFetching, isError} = useResendOtp()

    const handleResendOtp = ()=>{
        setOtpPayload({email: userOtp?.email, id: userOtp?.id})
    }
 
    return (
        <VerificationWrapper>
                <div>{ICONS.brandIcon1("80px")} </div>
               <div className="dev">Device verification</div>
        <div className="verification-container">
             <div className="input-cont">
           
            <form onSubmit={(e)=> handleSubmitOtp(e)}>
                {errorResponse ? <div className="error"> {errorResponse.message}</div>: ""}
                <NameInput type="number" value={otp} onChangeHandler={(e)=> handleChangeOtp(e)} label="" placeholder="Input six digits otp">
                <GoLock className="eye" color={`${colors.primary.lightGray}`} fontSize="22px" />
                </NameInput>
                    <button className="verifybtn" type="submit" disabled={isLoading ? true : false} style={{backgroundColor: `${isLoading? `${colors.primary.darkGreen}`: `${colors.primary.cyan}`}`}}>{isLoading ? "loading": "Verify"}</button>  
                    <div className="resend"  onClick={()=> handleResendOtp()}>{isFetching ? "sending": "Resend otp"}</div>  
                    {isError && <div className="error">error occured while resending one time passcode</div>}
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

