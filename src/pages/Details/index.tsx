import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header"
import { GoChevronLeft,GoKebabHorizontal } from "react-icons/go"
import ProfileDetailsImage from "../../components/BabyCardImage"
import ProfileDetailsTitle from "../../components/ChildCard"
import ProfileDetailsVerification from "../../components/Verification"
import DetailsDescription from "../../components/DetailsDescription"
import GoogleMap from "../../components/Map"
import DetailsAction from "../../components/DetailsAction"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../App/App"
import Alert from "../../components/Alert"
import DetailsWrapper from "./DetailsWrapper"
import useHandleRegister from "./hooks/useHandleRegister"
import Modal from "../../components/Modal"

const Details = ()=>{
    const {id} =  useParams()
    const user = useContext(UserContext)
    const [isCopied, setIsCopied] = useState<boolean>(false)
    const navigate  = useNavigate()
    const {onMutateRegister,
        loggedInUser,
        registrationLoading,
        registered,
        data,
        setId, 
        isLoading} =  useHandleRegister()



    useEffect(()=>{
        if(id){
            setId(id)
        }
    },[id, setId])
    
    
    useEffect(()=>{
        if(isLoading){
            user?.setIsModalOpen(true)
            return
        }
        user?.setIsModalOpen(false)
    },[isLoading,user])





    return (
  <DetailsWrapper>
    { user?.isModalOpen &&  <Modal ismodalopen={JSON.stringify(user.isModalOpen)}>
        <div className="loader-container">
        <span className="loader"></span>
        </div>
        </Modal>}
   { isCopied ? <Alert /> : ""}
   <div className="details-header">
   <Header title="Details">
<GoChevronLeft size="30px" onClick={()=> navigate(-1)}/>
<GoKebabHorizontal size="30px" />
</Header>
   </div>

<div className="DetailsBody">
<ProfileDetailsImage id={data?.image}/>
{data?.title && <ProfileDetailsTitle  title={data?.title} isOpen={data.isOpen} amount={data.amount}/>}
{data?.rating && <ProfileDetailsVerification rating={data?.rating} time={{from: data.from, to: data.to}} isVerified={data?.isVerified} />}
{data?.description && <DetailsDescription desc={data?.description} />}
<DetailsAction content={{owner: data?.owner as string, id: data?.userId, phoneNumber: data?.phonenumber, setIsCopied:setIsCopied}}   />
{data &&  data.location && <GoogleMap lat={data?.location.coordinates[1]} lng={data?.location.coordinates[0]}  />}
</div>
<div className="btn-container">
<button type="submit" onClick={()=>  onMutateRegister(data?._id)} className="register">{ registered && loggedInUser?.message._id &&  registered?.registered.includes(loggedInUser?.message._id) ?  "Already Enrolled" : "Enroll" }</button>
{registrationLoading && <button type="submit" className="register">Loading</button>}
</div>
</DetailsWrapper>
    )
}

export default Details

