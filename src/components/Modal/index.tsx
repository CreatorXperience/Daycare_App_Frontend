import  ReactDOM  from "react-dom"
import { TModalProps } from "./type"
import ModalWrapper from "./ModalWrapper"


const Modal = ({children, ismodalopen}: TModalProps)=>{
    return ReactDOM.createPortal(
        <ModalWrapper ismodalopen={ismodalopen}>
        <div className="modal-container">
            {children}
        </div>
        </ModalWrapper>,
        document.getElementById("modal-root") as HTMLElement
    )
       
    
}

export default Modal
