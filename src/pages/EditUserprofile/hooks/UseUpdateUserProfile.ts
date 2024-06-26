import { useMutation } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { useState } from "react"
import { TData, TUserFormProps } from "../type"


const usePostProfile = ()=>{ 

    const {user} =  useGetuserInfoFromStorage()
    const [response, setResponse] = useState()
    const [error, setError] =  useState<{message: string} | null>(null)
    const  updateProfile = async(item: TData)=> {
        if(!item.token && !item.user){
            return 
        }
        try{
            let response = await axiosInstance.post(`${ENDPOINT.create_user_profile}`,{...item.data, user: item.user, gender: item.data.gender ? "Male": "Female"}, {
                headers: {
                    authorization: item.token
                }
            } ) 
    
            return response.data
        }
        catch(e:any){
            console.log(error)
            setError(e.response.data)
        }
       
    }
    const {mutate, isLoading, isSuccess} = useMutation("user_profile", updateProfile)

    const mutateProfile = (data: TUserFormProps)=>{
        mutate({data, token: user?.token, user: user?.message._id}, {
            onSuccess: (data)=>{
                setResponse(data)
            }
        })
    }
    return {mutateProfile, isLoading, isSuccess, response,error}
}

export default usePostProfile