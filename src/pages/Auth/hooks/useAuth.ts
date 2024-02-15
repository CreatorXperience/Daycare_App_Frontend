import { useState } from "react"
import useRegisterUser from "../Signup/hooks/useRegisterUser"

const useAuth = ()=> {

    const [userPayload,setUserPayload] = useState({
        password: "",
        email: "",
        fullname: ""
      })

      let {mutateUserData, response,errorResponse} = useRegisterUser()
      console.log(response)
      console.log(errorResponse)

      const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
        
    setUserPayload({...userPayload,email: e.target.value})
    }
        
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setUserPayload({...userPayload,password: e.target.value})
    }
        
    const handleSubmitLoginData = (e:   React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault()

    console.log(userPayload)
    }

    const handleSubmitSignUpData = (e:   React.FormEvent<HTMLFormElement> )=>{
        e.preventDefault()
        mutateUserData(userPayload)
        }




    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault()
            setUserPayload({...userPayload,fullname: e.target.value})
    }

              return {
                handleChangeEmail,
                handleChangePassword, 
                handleSubmitLoginData, 
                handleSubmitSignUpData,
                 handleChangeName, 
                isPasswordVisible, 
                setIsPasswordVisible, 
                userPayload,
                response,
                errorResponse
              }
}

export default useAuth