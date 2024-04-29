import { Outlet, useNavigate} from "react-router-dom"
import HomeWrapper from "./HomeWrapper"
import LocationNav from "../../components/LocationNav"
import SafetyCard from "../../components/SafetyCard"
import OwnADayCare from "../../components/OwnADayCare"
import ChildCareCard from "../../components/ChildCareCard"
import List from "../../components/List"
import useHomeLogic from "./hooks/useHandleDaycares"
import Modal from "../../components/Modal"


const Home = ()=>{
    const {coordinates,data,setLocation,childData,setIsCoordinatesLoading, user} = useHomeLogic()
    return (
        <HomeWrapper>
             { user?.isModalOpen &&  <Modal ismodalopen={JSON.stringify(user.isModalOpen)}>
        <div className="loader-container">
        <span className="loader"></span>
        </div>
        </Modal>}
        <div className="home-container">
        <div className="body">
        <LocationNav setLocation={setLocation} setIsCoordinatesLoading={setIsCoordinatesLoading}/>
        <SafetyCard data={childData} />
        <List right="View all" left="Around you" />
        <ChildCareCard data={data}  coordinates={coordinates}/>
        <List left="Do you have daycare ?"  />
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

