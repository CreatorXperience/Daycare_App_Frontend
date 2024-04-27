import { useState } from "react"
import { TUserFormProps } from "../type"
import useGetProfile from "./useGetProfile"
import useUpdateProfile from "./useUpdateProfile"
import usePostProfile from "./UseUpdateUserProfile"
import _ from 'lodash'

const useHandleForm = ()=>{
    const {data,isLoading,refetch} = useGetProfile()
    const {mutateProfile, response,isLoading:isPostLoading} = usePostProfile()

    const {mutateProfile:updateProfile, response:update, isLoading:isPatchLoading} =  useUpdateProfile()
    const [form, setForm] = useState<TUserFormProps>({
        name: "",
        children_name: "",
        role:"",
        age: 0,
        drop: "",
        take: "",
        gender:false,
    })
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setForm((prev)=> ({...prev,name: e.target.value}))
      }

      const onChildNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setForm((prev)=> ({...prev,children_name: e.target.value}))
      }

      const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setForm((prev)=> ({...prev,age: +e.target.value}))
      }

      const onRoleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setForm((prev)=> ({...prev,role: e.target.value}))
      }

      const onSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()

        if(data || response){
           updateProfile(_.omit(form, ["_id","__v"]))
           return refetch()
        }
        mutateProfile(form)
      }

      const onDropChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setForm((prev)=> ({...prev,drop: e.target.value}))
      }
      const onTakeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setForm((prev)=> ({...prev,take: e.target.value}))
      }

      return {
        onAgeChange,
        onChildNameChange,
        onDropChange,
        onNameChange,
        onRoleChange,
        onSubmit,
        onTakeChange,
        setForm,
        form,
        data,
        isPostLoading,
        isPatchLoading
    }
}
export default useHandleForm