import { ReactNode } from "react"
import styled from "styled-components"
import  ReactDOM  from "react-dom"
import { colors } from "../../constants/colors"
type TModalProps = {
    children: ReactNode,
    isModalOpen: boolean
}

const Modal = ({children, isModalOpen}: TModalProps)=>{
    return ReactDOM.createPortal(
        <ModalWrapper isModalOpen={isModalOpen}>
        <div className="modal-container">
        <span className="loader"></span>
            {children}
        </div>
        </ModalWrapper>,
        document.getElementById("modal-root") as HTMLElement
    )
       
    
}

export default Modal

const ModalWrapper = styled.div<{isModalOpen: boolean}>`
width: 100%;
height: 100vh;

    .modal-container {
        width: 100%;
        height: 100%;
        background-color: ${colors.primary.black};
        opacity: 0.2;
        display: grid;
        place-content: center;

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
`