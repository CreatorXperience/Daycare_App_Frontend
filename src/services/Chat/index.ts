import { TCreatedChatResponse } from "../../components/Prompt/types"
import { ENDPOINT } from "../../constants/endpoints"
import { TLoginResponse } from "../../pages/Auth/Login/type"
import axiosInstance from "../Axios/axiosInstance"

type TChatPayload = {
        id: string,
        setErrorResponse: React.Dispatch<React.SetStateAction<undefined>>
}
const createChat = async (data: TChatPayload)=>{
    let user  = localStorage.getItem("DayCareuserLoginInfo")
    if(user){
        let parsedUser =  JSON.parse(user) as TLoginResponse
        try{
            console.log(parsedUser.token)
            let response = await axiosInstance.post(`${ENDPOINT.chats}/${data.id}`, {}, {
                headers: {
                    authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3ODVhZWYwYjJhMDIxNzdhYTZmODIiLCJpYXQiOjE3MDk4MDg3NDR9.lhCQP1_7OzDm1_QhXwc0tbQckrfb1SjFAKqSltOhaMs"
                }
            })
            return response.data  as TCreatedChatResponse
        }
        catch(e:any){
            data.setErrorResponse(e.response.data)
        }
    }
}

export default createChat