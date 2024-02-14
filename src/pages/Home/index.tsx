import { Outlet } from "react-router-dom"
import HomeWrapper from "./HomeWrapper"
import HelloUser from "../../components/HelloUser"
import SafetyCard from "../../components/SafetyCard"
import { useState } from "react"
import OwnADayCare from "../../components/OwnADayCare"
import ChildCareCard from "../../components/ChildCareCard"
import List from "../../components/List"


const Home = ()=>{
    const [childData] = useState({
        percentage: "100%"
    })

    return (
        <HomeWrapper>
        <div className="home-container">
        <div className="body">
        <HelloUser />
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

