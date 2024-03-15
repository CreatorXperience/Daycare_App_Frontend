import styled from "styled-components";
import { colors } from "../../constants/colors";

const FormActionWrapper =  styled.div`
.form-action-wrapper{

    .login-btn{
        width: 100%;
        margin-top: 50px;
        display: grid;
      place-content: center;

      
      .buttons {
        width: 300px;
        padding: 30px;
      }
     }
     
     .or-line {
         width: 100%;
         height: 30px;
         position: relative;
         display: flex;
         justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      
      .or {
          width: 10%;
          position: absolute;
        top: 2px;
        z-index: 5;
        background-color: ${colors.primary.white};
        display: flex;
        justify-content: center;
        font-weight: 800;
    }

    .line {
        width: 100%;
        background-color: ${colors.primary.lightGray};
        height: 2px;
        position: absolute;
        z-index: -1;
      }
     }

     .Oauth {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      
      .google-oauth{
          width: 70%;
          height: 100%;
          border: 1px solid ${colors.primary.lightGray};
          border-radius: 10px;
          padding: 2px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    }
    }
    `

    export default FormActionWrapper