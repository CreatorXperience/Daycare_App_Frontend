import { useRef } from "react"
import useUploadImage from "../../ChildcareProfile/hooks/useUploadImage"
import { ENDPOINT } from "../../../constants/endpoints"

const useUploadProfileImage = ()=>{
    const ref = useRef<HTMLInputElement |  null>(null)
    const {mutateUpload,response} = useUploadImage({endpoint: ENDPOINT.userprofile})
    const handleMimicUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(ref && ref.current){
          ref.current.click()
        }
      }


          
      const onFileUploaded = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        if(e.target.files){
        mutateUpload(e.target.files[0])
        }
      }

      return {mutateUpload,handleMimicUpload,onFileUploaded,response,ref}
}

export default useUploadProfileImage