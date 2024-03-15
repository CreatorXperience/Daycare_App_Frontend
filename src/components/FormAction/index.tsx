import Button from "../Button"
import { Link } from "react-router-dom"
import type { TFormProps } from "./type"
import FormActionWrapper from "./FormActionWrapper"


const FormAction = ({text, link}: TFormProps)=>{
    return (
        <FormActionWrapper >
        <div className="form-action-wrapper">
            
      <div className="login-btn">
         <Button text={text}></Button>
      </div>

      <div className="or-line">
      <div className="line"></div>
        <div className="or">or</div>
      </div>

      <div className="Oauth">
    <Link to={`/${link?.toLowerCase()}`}><div className="google-oauth">{link}</div></Link>  
      </div>
        </div>
        </FormActionWrapper>
    )
}

export default FormAction

