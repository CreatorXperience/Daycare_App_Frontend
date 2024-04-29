import { useLayoutEffect } from "react"
import useGetProfile from "../../pages/EditUserprofile/hooks/useGetProfile"
import Modal from "../Modal"
import ProfileModal from "../ProfileModal"
import { useNavigate } from "react-router-dom"

const Blank = ()=>{
    let {data} =   useGetProfile()
    const navigate =  useNavigate()
    useLayoutEffect(()=>{
        if(data)
        navigate("/position")
    },[data])
    return (
        <div>
             <Modal><ProfileModal /></Modal>
        </div>
    )
}

export default Blank