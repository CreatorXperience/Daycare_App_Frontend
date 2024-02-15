import { useState } from "react"

const useAuth = ()=> {

    const [userPayload,setUserPayload] = useState({
        password: "",
        email: "",
        name: ""
      })

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
        console.log(userPayload)
        }




    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault()
            setUserPayload({...userPayload,name: e.target.value})
    }

              return {handleChangeEmail,handleChangePassword, handleSubmitLoginData, handleSubmitSignUpData, handleChangeName, isPasswordVisible, setIsPasswordVisible, userPayload}
}

export default useAuth