import { useMutation } from "react-query"
import { useState } from "react"
import type { TMessage } from "../type"
import { uploadImage } from "../../../services/upload/upload"



const useUploadImage = ()=>{
    const [response, setResponse]  = useState<TMessage>()
    const [error, setError] = useState<Partial<TMessage>>()

    let {mutate,isLoading} = useMutation("upload-image", uploadImage)

    const mutateUpload = (file: File)=>{
        if(file && file.size > 51200){
            return setError({message: "File exceeded 50kb"})
       }

        mutate({payload: {file,setError}},{
            onSuccess: (data)=>{
                setError(undefined)
                setResponse(data)
            }
        })
    }

    return {mutateUpload, response,error,isLoading}
}

export default useUploadImage