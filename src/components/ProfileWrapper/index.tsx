import { ReactNode, useLayoutEffect } from "react"
import useGetProfile from "../../pages/EditUserprofile/hooks/useGetProfile"
import { useNavigate } from "react-router-dom"

type TProfileWrapperProps = {
children: ReactNode
}
const ProfileWrapper  = ({children}: TProfileWrapperProps)=>{
    const {data:profileData} = useGetProfile()
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        if(!profileData){
            navigate("/editmyprofile")
            window.location.reload()
        }
      },[profileData])

    return (
        <div>
            {children}
        </div>
    )
}

export default ProfileWrapper