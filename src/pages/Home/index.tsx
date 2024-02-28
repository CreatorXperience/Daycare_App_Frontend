import { Outlet} from "react-router-dom"
import HomeWrapper from "./HomeWrapper"
import LocationNav from "../../components/LocationHeader"
import SafetyCard from "../../components/SafetyCard"
import OwnADayCare from "../../components/OwnADayCare"
import ChildCareCard from "../../components/ChildCareCard"
import List from "../../components/List"
import useHomeLogic from "./hooks/useHandleDaycares"


const Home = ()=>{
    const {coordinates,data,setLocation,childData,setIsCoordinatesLoading} = useHomeLogic()

    return (
        <HomeWrapper>
        <div className="home-container">
        <div className="body">
        <LocationNav setLocation={setLocation} setIsCoordinatesLoading={setIsCoordinatesLoading}/>
        <SafetyCard data={childData} />
        <List right="View all" left="Around you" />
        <ChildCareCard data={data}  coordinates={coordinates}/>
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

