import styled from "styled-components"
import { colors } from "../../constants/colors"
import { ENDPOINT, URL } from "../../constants/endpoints"
import ImageModalWrapper from "./ImageModalWrapper"

type TImageProp = {
    image?: string,
    closeModal:  React.Dispatch<React.SetStateAction<string | null | undefined>>
}
const ImageModal = ({image,closeModal}: TImageProp)=>{

    return (
        <ImageModalWrapper image={image}>
            <div className="image-cont">
                <div className="image"></div>
                <div className="text">Profile picture is successfuly set</div>
                <div className="action">
                <button className="btn" onClick={()=> closeModal(null)}>cancel</button>
                </div>
         
            </div>
        </ImageModalWrapper>
    )
}

export default ImageModal

