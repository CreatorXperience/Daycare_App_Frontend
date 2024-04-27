import { useQuery } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { useState } from "react"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { TLoginResponse } from "../../Auth/Login/type"

type TRes = {
    imageId: string
}
const useGetUserId = ()=>{
    const {user} = useGetuserInfoFromStorage()
    const [res, setRes] = useState<TRes>()

    const getUserId = async(user: TLoginResponse | null)=>{
        let response = await axiosInstance.get(`${ENDPOINT.user_image}/${user?.message._id}`, {
            headers: {
                authorization: user?.token
            }
        })
        return response.data
    }
    const {data,isLoading,isError,refetch} = useQuery("user-image-id", ()=> getUserId(user), {
        onSuccess: (data)=> {
            setRes(data)
        }
    })

    return {data,isLoading,isError,res,refetch}
}

export default useGetUserId