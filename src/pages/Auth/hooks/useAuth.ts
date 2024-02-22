import {useContext, useEffect, useState } from "react"
import useRegisterUser from "../Signup/hooks/useRegisterUser"
import useLoginUser from "../Login/hooks/useLoginUser"
import useRedirect from "../../../App/hooks/useRedirect"
import { UserContext } from "../../../App/App"

const useAuth = ()=> {
  
    useRedirect()
    const [userPayload,setUserPayload] = useState({
        password: "",
        email: "",
        fullname: ""
      })

      let {mutateUserData, response,errorResponse,isLoading} = useRegisterUser()

      let {errorResponse:LoginError, mutateUserData:mutateUserLoginData, response: LoginResponse, isLoading:isLoginLoading} = useLoginUser()

      const user = useContext(UserContext)


      const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

      useEffect(()=>{
        if(isLoginLoading){
          return user?.setIsModalOpen(true)
          }
          else{
            user?.setIsModalOpen(false)
          }
      }, [isLoginLoading, user])


      useEffect(()=>{
        if(isLoading){
        return   user?.setIsModalOpen(true)
        }
        else{
          user?.setIsModalOpen(false)
        }
      }, [isLoading, user])


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
    mutateUserLoginData(userPayload)
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
                errorResponse,
                LoginResponse,
                LoginError,
              }
}

export default useAuth