import { useEffect, useRef, useState } from "react"
import useUploadImage from "./useUploadImage"
import useProfileForm from "./useProfileForm"
import { useSearchParams } from "react-router-dom"
import { TLoginResponse } from "../../Auth/Login/type"

const useUploadEffect  = ()=>{

  const ref = useRef<HTMLInputElement | null>(null)
  const {response, mutateUpload,error,isLoading} = useUploadImage()
  const [,setId] = useState<string>()

  const radioRef = useRef<HTMLDivElement | null>(null) 
  const [isDaycareOwner, setIsDaycareOwner] =  useState<boolean>()
  const [label, setLabel] = useSearchParams()

  const {
    handleSelect,
    onAmountChanged,
    onClosingTimeChange,
    onDescriptionChange,
    onMobileNumberChange,
    onOpeningTimeChange,
    onRoleChange,
    onSubmit,
    onTitleChange,
    setForm,
    form,
    isProfileLoading,
    setUserId,
    isUpdateLoading,
    errorResponse
  } =  useProfileForm()


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
    
      useEffect(()=>{
        if(response && response.id){
          setId(response.id)
          setForm((prev)=> ({...prev, image: response.id}))
        }
      },[response,setForm])
    
      useEffect(()=>{
        let user = localStorage.getItem("DayCareuserLoginInfo")
        if(user){
          let parse = JSON.parse(user) as TLoginResponse
          setIsDaycareOwner(parse.message.day_care_owner)
          setUserId(parse.message._id)
        }
      },[setUserId])

      return {
        handleSelect,
        onAmountChanged,
        onClosingTimeChange,
        onDescriptionChange,
        onMobileNumberChange,
        onOpeningTimeChange,
        onRoleChange,
        onSubmit,
        onTitleChange,
        setForm,
        form,
        isProfileLoading,
        isUpdateLoading, 
        isDaycareOwner,
        radioRef,
        handleMimicUpload,
        onFileUploaded, 
        isLoading, 
        label, 
        setLabel,
        error,
        ref,
        errorResponse
      }
}

export default useUploadEffect