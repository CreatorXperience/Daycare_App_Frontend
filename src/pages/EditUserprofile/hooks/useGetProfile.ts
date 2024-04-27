import { useQuery } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import { TProfilePayload, TResponse } from "../type"




const useGetProfile = ()=>{
    const {user} = useGetuserInfoFromStorage()
    const getProfile = async({id, token}: TProfilePayload)=>{
        if(!id &&  !token){
            return 
        }
        let res = await axiosInstance.get(`${ENDPOINT.create_user_profile}/${id}`,  {
            headers: {
                authorization: token
            }
        })

        return res.data as TResponse
    }
   const {data, isLoading,isError, refetch} = useQuery("get_profile", ()=>  getProfile({id: user?.message._id,token:user?.token}), {
    enabled: !!user?.message._id,
    staleTime: 5000, cacheTime: 5000
   })


   return {data,isLoading, isError, refetch}
}

export default useGetProfile