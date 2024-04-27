import { useState } from "react"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { TLoginResponse } from "../../../pages/Auth/Login/type"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { useQuery } from "react-query"

type TRes = {
    imageId: string
}
const useGetDaycareImageId = (id?: string)=>{
    const {user} = useGetuserInfoFromStorage()
    const [res, setRes] = useState<TRes>()

    const getUserId = async(user: TLoginResponse | null)=>{
        if(id){
            let response = await axiosInstance.get(`${ENDPOINT.user_image}/${id}`, {
                headers: {
                    authorization: user?.token
                }
            })
            return response.data
        }
    }
    const {data,isLoading,isError,refetch} = useQuery("user-image-id", ()=> getUserId(user), {
        onSuccess: (data)=> {
            setRes(data)
        }
    })

    return {data,isLoading,isError,res,refetch}
}

export default useGetDaycareImageId