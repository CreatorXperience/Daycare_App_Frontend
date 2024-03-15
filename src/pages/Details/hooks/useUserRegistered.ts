import { useState } from "react"
import { useQuery } from "react-query"
import useGetuserInfoFromStorage from "../../../utils/useGetUserInfoFromStorage"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { TIsRegisterPayload, TRegisteredPayload } from "../type"


const useUserRegistered = ()=>{
    const [id, setId]= useState<string>()
    const {user} =  useGetuserInfoFromStorage()
    const [errorResponse, setErrorResponse] = useState()
    
    const register = async (payload: TIsRegisterPayload)=>{
        try{
            if(payload.id &&  payload.token){
                let response =  await axiosInstance.get(`${ENDPOINT.register}/registered/${payload.id}`, {
                    headers: {
                        authorization: payload.token
                    }
                })
                return  response.data as TRegisteredPayload
            }
        }catch(e: any){
            setErrorResponse(e.response.data)
        }
    }

    let {data, isLoading} = useQuery(["isUserRegister" , id],()=> register({id, token: user?.token }), {
      enabled: id ? true: false,
      staleTime: 5000,
      cacheTime: 5000
  })
  return {data, isLoading, errorResponse, setId, user}
}

export default useUserRegistered