import { useState } from "react"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { TData, TUserFormProps } from "../type"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { useMutation } from "react-query"


const useUpdateProfile = ()=>{
    const {user} =  useGetuserInfoFromStorage()
    const [response, setResponse] = useState()
    const [error, setError] = useState<{message: string} | null>(null)
    const  updateProfile = async(item: TData)=> {
        if(!item.token && !item.user && !item.id){
            return 
        }
        try{
            let response = await axiosInstance.patch(`${ENDPOINT.create_user_profile}/${item.user}`,{...item.data, gender: item.data.gender ? "Male": "Female"}, {
                headers: {
                    authorization: item.token
                }
            } ) 
    
            return response.data
        }catch(e:any){
            setError(e.response.data)
        }
 
    }
    const {mutate, isLoading, isSuccess} = useMutation("user_profile", updateProfile)

    const mutateProfile = (data: Partial<TUserFormProps>)=>{
        mutate({data, token: user?.token, user: user?.message._id}, {
            onSuccess: (data)=>{
                setResponse(data)
            }
        })
    }
    return {mutateProfile, isLoading, isSuccess, response,error}
}

export default useUpdateProfile