import { useMutation } from "react-query"
import axiosInstance from "../../../services/Axios/axiosInstance"
import { ENDPOINT } from "../../../constants/endpoints"
import { useState } from "react"
import { TLoginResponse } from "../../Auth/Login/type"


type TMessage = {
        message: string,
        id: string
}
const useUploadImage = ()=>{
    const [response, setResponse]  = useState<TMessage>()
    const [error, setError] = useState<Partial<TMessage>>()

    const uploadImage = async (file: File)=>{
        let formData =  new FormData()
        formData.append("file", file)
        try{
            let user = localStorage.getItem("DayCareuserLoginInfo")
            if(user){
                let parseUser = JSON.parse(user) as  TLoginResponse
                let response = await axiosInstance.post(`${ENDPOINT.upload}`,formData, {
                    headers: {
                        authorization: parseUser.token
                    }
                })
                return response.data as TMessage
            }
        }
        catch(e:any){
            console.log(e)
             setError(e.response)
        }
        
    }

    let {mutate,isLoading} = useMutation("upload-image", uploadImage)

    const mutateUpload = (file: File)=>{
        if(file && file.size > 51200){
            return setError({message: "File exceeded 50kb"})
       }

        mutate(file,{
            onSuccess: (data)=>{
                setError(undefined)
                setResponse(data)
            }
        })
    }

    return {mutateUpload, response,error,isLoading}
}

export default useUploadImage