import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import { GoChevronLeft,GoKebabHorizontal } from "react-icons/go"
import ProfileDetailsImage from "../../components/BabyCardImage"
import ProfileDetailsTitle from "../../components/ChildCard"
import ProfileDetailsVerification from "../../components/Verification"
import DetailsDescription from "../../components/DetailsDescription"
import GoogleMap from "../../components/Map"
import styled from "styled-components"
import DetailsAction from "../../components/DetailsAction"
import useGetDayCare from "./hooks/useGetDaycare"
import { useContext, useEffect } from "react"
import { UserContext } from "../../App/App"

const Details = ()=>{
    const {id} =  useParams()
    const {data,setId,isLoading} = useGetDayCare()
    const user = useContext(UserContext)

  

    useEffect(()=>{
        if(id){
         
            setId(id)
        }

      
    },[id])
    
    
    useEffect(()=>{
        if(isLoading){
            user?.setIsModalOpen(true)
            return
        }
        user?.setIsModalOpen(false)
    },[isLoading,user])


    

    return (

  <DetailsWrapper>
<Header>
<GoChevronLeft size="30px" />
<GoKebabHorizontal size="30px" />
</Header>
<div className="DetailsBody">
<ProfileDetailsImage />
{data?.title && <ProfileDetailsTitle  title={data?.title} isOpen={data.isOpen} amount={data.amount}/>}
{data?.rating && <ProfileDetailsVerification rating={data?.rating} isVerified={data?.isVerified} />}
{data?.description && <DetailsDescription desc={data?.description} />}
<DetailsAction content={{owner: data?.owner as string, phoneNumber: data?.phonenumber}}  />
<GoogleMap />
</div>
</DetailsWrapper>
    )
}

export default Details

const DetailsWrapper = styled.div`
    width: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    z-index: -1;
    overflow-y: hidden;
    height: 100vh;
`