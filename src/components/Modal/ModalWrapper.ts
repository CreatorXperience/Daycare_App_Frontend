import styled from "styled-components";
import { colors } from "../../constants/colors";

const ModalWrapper = styled.div<{ismodalopen: string}>`
width: 100%;
height: 100vh;


    .modal-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .loader-container{
          width: 100%;
          height: 100%;
          background-color: ${colors.primary.black};
          opacity: 0.2;
          display: flex;
        justify-content: center;
        align-items: center;

             .loader {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }

       .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: prixClipFix 2s linear infinite ;
      }
      .loader::after{
        border-color: #FF3D00;
        animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
        inset: 6px;
      }

       @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }

        }
       

          .filter-container{
            width: 100%;
          height: 100%;
          display: flex;
          position: relative;

          .overlay{
            width: 100%;
            height: 100%;
            background-color: ${colors.primary.black};
            opacity: 0.2;
            position: absolute;
            z-index: 1;
          }

            .main-container{
              width: 100%;
              height: 60%;
              position: absolute;
              background-color: ${colors.primary.white};
                z-index: 9;
                bottom: 0;
                border-radius: 12px;
                animation: slideup ease-in-out .3s 1;
                transform: translateY(0%);
            }

            @keyframes slideup {
              from {
                transform: translateY(100%);
              }
              to{
                transform: translateY(0%);
              }
            }
            }

     
     

     

    }
`

export default ModalWrapper