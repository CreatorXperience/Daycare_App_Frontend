import styled from "styled-components";
import { colors } from "../../constants/colors";
import { URL } from "../../constants/endpoints";

const UserInputDataWrapper = styled.div<{id?: string}>`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: scroll;

  .profile-wrapper {
    width: 100%;
    padding-top: 20px;
    overflow-y: scroll;
    position: relative;
    padding: 8px;
    height: 100vh;


    form{
      width: 100%;
      height: 70vh;
      overflow-y: auto;
    }

    .btnwrapper{
      width: 100%;
      display: flex;
      justify-content: center;
      position: fixed;
      bottom: 30px;
      background-color: ${colors.primary.white};
      padding: 5px;



   .save-btn{
      width: 90%;
      padding: 12px;
      border: none;
      background-color: ${colors.primary.cyan};
      font-size: 16px;
      color: ${colors.primary.white};
      border-radius: 10px;
    }
    }
 

    .image-container{
      position: relative;
      width: 95%;
      height: 150px;
      border-radius: 12px;
      border: 2px solid ${colors.primary.grayishWhite};
      margin: 0 auto;
      background-image: url(${props=> props.id ? `${URL().endpoint}/upload/${props.id}`:""});
      background-size: cover;

    .loader {
      width: 50px;
      padding: 8px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: #25b09b;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      --_m: 
        conic-gradient(#0000 10%,#000),
        linear-gradient(#000 0 0) content-box;
      -webkit-mask: var(--_m);
              mask: var(--_m);
      -webkit-mask-composite: source-out;
              mask-composite: subtract;
      animation: l3 1s infinite linear;
    }
    @keyframes l3 {to{transform: rotate(1turn)}}

      .upload-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: tomato;
        border: none;
        color: ${colors.primary.white};
        font-size: 16px;
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
    }
  }

  .back-message {
    display: flex;
    width: 100%;
    text-align: center;
    .message {
      width: 100%;
      display: flex;
      justify-content: center;
      place-items: center;
      margin-top: 10px;
    }
  }

  .username-wrapper {
    padding-top: 10px;

    .description-area{
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 5px;
      position: relative;

      .description-title{
       padding: 12px;
       font-size: 16px;
       font-weight: 600
      }

      textarea {
        width:95%;
        height: 200px;
        padding: 8px;
        border-radius: 12px;
        border: 2px solid ${colors.primary.lightGray};
        outline-color: ${colors.primary.cyan};
        margin: 0 auto;
      }

      .pen {
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }

    .radio-block{
      width: 100%;

      .open {
        padding: 12px;
       font-size: 16px;
       font-weight: 600
      }
      .radio-group{
        width: 100%;
        display:flex;
      }
    }

    .location-wrapper{
      width: 100%;

      .location-title {
        padding: 12px;
       font-size: 16px;
       font-weight: 600
      }
    }
  }

  .back-btn {
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${colors.primary.grayishWhite};
  }

  .gender {
    display: flex;
  }
  .moments {
    display: flex;
  }

  #drop {
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.primary.textGray};
    outline: none;
    padding: 15px;
    border-radius: 15px;
  }
  #take {
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.primary.textGray};
    outline: none;
    padding: 15px;
    border-radius: 15px;
  }

  .check-out-btn {
    width: 100%;
    display: grid;
    place-content: center;

    .buttons {
      width: 300px;
      padding: 30px;
    }
  }
`;

export default UserInputDataWrapper;