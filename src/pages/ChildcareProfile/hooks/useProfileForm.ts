import { useEffect, useState } from "react"
import useGetProfile from "./useGetProfile"
import { TChild, TExtendChildcare } from "../type"
import useSaveProfile from "./useSaveProfile"
import _ from "lodash"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"

const useProfileForm = ()=> {   
            const {setId:setUserId, data,isLoading:isProfileLoading,} = useGetProfile()
            const [,setId] = useState<string>()
            const {mutateProfile,isLoading:isUpdateLoading, errorResponse, isSuccess,} = useSaveProfile()
            let {user} = useGetuserInfoFromStorage()
            const [form, setForm] = useState<TExtendChildcare<TChild & {location:string},"_id">>({
                amount: "",
                description: "",
                exactLocation: "",
                image: "",
                isOpen: false,
                location: "",
                phonenumber: "",
                rating: 3,
                title: "",
                userId: user?.message._id as string,
                from: "",
                to: "",
                role:""
            })

            useEffect(()=>{
              if(isSuccess && !errorResponse ){
                let sanitizedData = _.omitBy(form, (value)=> value === "") as Partial<TExtendChildcare<TChild & {location:string},"_id">>
                localStorage.setItem("profileData", JSON.stringify(sanitizedData))
                if(user){
                  user.message.day_care_owner = true
                  localStorage.removeItem("DayCareuserLoginInfo")
                  localStorage.setItem("DayCareuserLoginInfo",  JSON.stringify(user))
                }
              }
            }, [isSuccess,errorResponse,form, user])

            useEffect(()=>{
              let profile = localStorage.getItem("profileData")
              if(profile){
                let parseProfile = JSON.parse(profile) as TExtendChildcare<TChild & {location:string},"_id">
                if(parseProfile.userId === user?.message._id){
                  setForm(parseProfile)
                }
              }
            },[user?.message._id])
      

            useEffect(()=>{
            if(data){
            let currentData = {..._.omit(data,["_id","isVerified","__v","perDuration"]),location: data.exactLocation, amount: data.amount.toString()}
                setForm(currentData)
            
            setId(currentData.image)
            }
            }, [data])
        
          
          const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault()
             setForm((prev)=> ({...prev, title: e.target.value}))
          }
        
          const onMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault()
            setForm((prev)=> ({...prev, phonenumber: e.target.value}))
          }
        
          const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=> {
            e.preventDefault()
            setForm((prev)=> ({...prev, description: e.target.value}))
          }
        
          const onAmountChanged = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setForm((prev)=> ({...prev, amount: e.target.value}))
          }
        
          const onOpeningTimeChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
            e.preventDefault()
            setForm((prev)=> ({...prev, from: e.target.value}))
          } 
          const onClosingTimeChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
            e.preventDefault()
            setForm((prev)=> ({...prev, to: e.target.value}))
          }
        
        
          const onSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
            e.preventDefault()

          
            let sanitizedData = _.omitBy(form, (value)=> value === "") as Partial<TExtendChildcare<TChild & {location:string},"_id">>
            mutateProfile(_.omit(sanitizedData, ["exactLocation"]))
          }
        
          const onRoleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault()
            setForm((prev)=> ({...prev, role: e.target.value}))
          }
        
        
          const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>)=>{
            setForm((prev)=> ({...prev, location: e.target.value}))
          }

          return {
            onTitleChange,
            onAmountChanged,
            onClosingTimeChange,
            onDescriptionChange,
            onRoleChange,
            onSubmit,
            onMobileNumberChange,
            onOpeningTimeChange,
            handleSelect,
            setForm,
            form,
            isProfileLoading,
            setUserId,
            isUpdateLoading,
            errorResponse
        }
}

export default useProfileForm