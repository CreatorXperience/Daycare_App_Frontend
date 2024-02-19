import { Outlet} from "react-router-dom"
import HomeWrapper from "./HomeWrapper"
import LocationNav from "../../components/LocationHeader"
import SafetyCard from "../../components/SafetyCard"
import { useEffect, useState } from "react"
import OwnADayCare from "../../components/OwnADayCare"
import ChildCareCard from "../../components/ChildCareCard"
import List from "../../components/List"
import { TLoginResponse } from "../Auth/Login/type"


const Home = ()=>{
    const [childData] = useState({
        percentage: "100%"
    })

        //TODO:  navigate user to to another page if user is not verified 
        // const navigate = useNavigate()

    useEffect(()=>{
        let user =  localStorage.getItem("DayCareuserLoginInfo")
        if(user){ 
         let parsedUserObj = JSON.parse(user) as TLoginResponse
        if(!parsedUserObj.message.isVerified){
            // return navigate("/verify")
        }
        }
    },[])
    return (
        <HomeWrapper>
        <div className="home-container">
        <div className="body">
        <LocationNav />
        <SafetyCard data={childData} />
        <List right="View all" left="Around you" />
        <ChildCareCard />
        <List left="Own  a day care"  />
        <OwnADayCare />
        </div>
        <div className="footer">
        <Outlet />
        </div>

        </div>
        </HomeWrapper>
    )
}

export default Home

