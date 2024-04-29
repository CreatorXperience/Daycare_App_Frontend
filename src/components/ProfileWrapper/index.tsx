import { ReactNode, useLayoutEffect } from "react"
import useGetProfile from "../../pages/EditUserprofile/hooks/useGetProfile"
import { useNavigate } from "react-router-dom"

type TProfileWrapperProps = {
children: ReactNode
}
const ProfileWrapper  = ({children}: TProfileWrapperProps)=>{
    // const {data:profileData} = useGetProfile()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
     let profile =    localStorage.getItem("user_profile")
     if(profile){
        return
     }
       
        navigate("/hasprofile")

      })

    return (
        <div>
            {children}
        </div>
    )
}

export default ProfileWrapper