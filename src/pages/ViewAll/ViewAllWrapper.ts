import styled from "styled-components";
import { colors } from "../../constants/colors";

const ViewAllWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
   background-color: ${colors.primary.white};
   position: relative;

   .result-cont {
    width: 98%;
    height: 100%;
    display: flex;
    flex-flow: column;
    overflow-y: auto;

    .no-data{
        position: relative;
        transform: translate(-50%,-50%);
        top: 30%;
        left: 50%;
        text-align: center;
        font-size: 14px;
        padding: 12px;
    }

     .loader {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite;
        position: relative;
        transform: translate(-50%,-50%);
        top: 40%;
        left: 50%
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid   ${colors.primary.cyan};
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

   .result-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
   }
`
export default ViewAllWrapper