import { Outlet } from "react-router-dom"
import HomeWrapper from "./HomeWrapper"
import HelloUser from "../../components/HelloUser"
import SafetyCard from "../../components/SafetyCard"
import { useState } from "react"
import DiscountCard from "../../components/DiscountCard"
import ChildCareCard from "../../components/ChildCareCard"
import List from "../../components/List"


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
        <List />
        <ChildCareCard />
        <List />
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

