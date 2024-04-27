import styled from "styled-components"
import Header from "../../components/Header"
import { GoChevronLeft, GoKebabHorizontal } from "react-icons/go"
import { useNavigate } from "react-router-dom"
import { colors } from "../../constants/colors"
import useUploadImage from "../ChildcareProfile/hooks/useUploadImage"
import {useEffect, useRef, useState } from "react"
import Modal from "../../components/Modal"
import ImageModal from "../../components/ImageModal"
import { ENDPOINT, URL } from "../../constants/endpoints"
import useGetUserId from "./hooks/useGetUserId"
import useGetProfile from "../EditUserprofile/hooks/useGetProfile"
import UserProfileWrapper from "./UserProfileWrapper"
import useUploadProfileImage from "./hooks/useUploadProfile"

const UserProfile = ()=>{
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState<string|null>()
    const {res,refetch} = useGetUserId()
    const [imageId, setImageId]= useState<string>()
    const {data:profileData} = useGetProfile()
    const {handleMimicUpload,onFileUploaded,response,ref} = useUploadProfileImage()

    useEffect(()=>{
        if(res){
            setImageId(res.imageId)
        }

  },[res])


  useEffect(()=>{
    if(response)
    refetch()
    setOpenModal(res?.imageId)
  },[response])


      const logOut = ()=>{
        localStorage.removeItem("DayCareuserLoginInfo")
        localStorage.removeItem("lastSearch")
        localStorage.removeItem("lastSeen")
        navigate("/")
    }


return (
    <UserProfileWrapper id={imageId}>
        {profileData && imageId && <div className="UserWrapper">
        <Header title="My Profile">
            <GoChevronLeft onClick={()=> {
                navigate("/home")
                }}/>   
            <GoKebabHorizontal />
        </Header>

      {openModal &&   <Modal>
            <ImageModal image={imageId} closeModal={setOpenModal}/>
        </Modal>}

        <div className="profile-card">
                <div className="circle">
                    <form> 
                        <input type="file" ref={ref} onChange={(e)=> onFileUploaded(e)} formEncType="multipart/form-data"/>
                    </form>
                    <button onClick={(e)=> handleMimicUpload(e)}>
                        upload
                    </button>
                </div>
                <div className="desc">
                    <p>{profileData && profileData?.name}</p>
                    <p>{profileData && profileData?.role}</p>
                    <button onClick={()=> navigate("/editmyprofile")}>Edit Profile</button>
                </div>
        </div>

        <div className="options">
        <div className="option1" onClick={()=> navigate("/editmyprofile")}>
        <p className="message">View profile</p>
         <p className="desc">View and Edit user profile</p>
        </div>
        <div className="option2" onClick={()=> navigate("/profile")}>
            <p className="message">Do you have a daycare?</p>
            <p className="desc">create a daycare now or view your daycare</p>
            </div>

            <div className="option2" onClick={()=> logOut()}>
            <p className="message">Log out</p>
            </div>
        </div>
        </div>}
    </UserProfileWrapper>
)
}

export default UserProfile


