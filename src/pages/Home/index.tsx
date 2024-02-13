import { Outlet } from "react-router-dom"
import HomeWrapper from "./HomeWrapper"
import HelloUser from "../../components/HelloUser"
import ChildProfile from "../../components/ChildProfile"
import SafetyCard from "../../components/SafetyCard"
import { useState } from "react"
import DiscountCard from "../../components/DiscountCard"


const Home = ()=>{
    const [childData, setChildData] = useState({
        percentage: "100%"
    })
    return (
        <HomeWrapper>
        <div className="home-container">
        <div className="body">
        <HelloUser />
        <SafetyCard data={childData} />
        <DiscountCard data = {{discount: "30%"}}/>
        </div>
        <div className="footer">
        <Outlet />
        </div>

        </div>
        </HomeWrapper>
    )
}

export default Home

