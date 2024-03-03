import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import { GoChevronLeft,GoKebabHorizontal } from "react-icons/go"
import ProfileDetailsImage from "../../components/BabyCardImage"
import ProfileDetailsTitle from "../../components/ChildCard"
import ProfileDetailsVerification from "../../components/Verification"
import DetailsDescription from "../../components/DetailsDescription"
import GoogleMap from "../../components/Map"
import DetailsAction from "../../components/DetailsAction"
import useGetDayCare from "./hooks/useGetDaycare"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../App/App"
import Alert from "../../components/Alert"
import DetailsWrapper from "./DetailsWrapper"

const Details = ()=>{
    const {id} =  useParams()

    const {data,setId,isLoading} = useGetDayCare()
    const user = useContext(UserContext)
    const [isCopied, setIsCopied] = useState<boolean>(false)

  
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
   { isCopied ? <Alert /> : ""}
<Header title="Details">
<GoChevronLeft size="30px" />
<GoKebabHorizontal size="30px" />
</Header>
<div className="DetailsBody">
<ProfileDetailsImage />
{data?.title && <ProfileDetailsTitle  title={data?.title} isOpen={data.isOpen} amount={data.amount}/>}
{data?.rating && <ProfileDetailsVerification rating={data?.rating} isVerified={data?.isVerified} />}
{data?.description && <DetailsDescription desc={data?.description} />}
<DetailsAction content={{owner: data?.owner as string, phoneNumber: data?.phonenumber, setIsCopied:setIsCopied}}   />
{data &&  data.location && <GoogleMap lat={data?.location.coordinates[1]} lng={data?.location.coordinates[0]}  />}
</div>
</DetailsWrapper>
    )
}

export default Details

