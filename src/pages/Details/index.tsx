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


const Details = ()=>{
    const {id} =  useParams()
    console.log(id)
    return (
        <DetailsWrapper>
            <Header>
        <GoChevronLeft size="30px" />
        <GoKebabHorizontal size="30px" />
        </Header>
        <div className="DetailsBody">
        <ProfileDetailsImage />
        <ProfileDetailsTitle />
        <ProfileDetailsVerification />
        <DetailsDescription />
        <DetailsAction />
        <GoogleMap />
        </div>
       
        </DetailsWrapper>
     
    )
}

export default Details

const DetailsWrapper = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid red;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`