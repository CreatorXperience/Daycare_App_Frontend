import { GoSearch } from "react-icons/go";
import ICONS from "../../constants/icons";
import LocationNavWrapper from "./HelloUserWrapper";
import useLocation from "./hooks/useLocation";
import { TLocation } from "./type";
import useGetStates from "./hooks/useGetState";
import { useEffect } from "react";



const LocationNav = ({setLocation,setIsCoordinatesLoading}:TLocation) => {
    const  {currentLocation,handleSetCurrentLocation} =  useLocation(setLocation)
    const {data, isFetching} = useGetStates()

    useEffect(()=>{
        setIsCoordinatesLoading(isFetching)
    },[isFetching,setIsCoordinatesLoading])

    return ( 
        <LocationNavWrapper>
            <div className="location-nav-wrapper">
                <div className="location-header">
                    <div className="location">Location<select onChange={(e)=> handleSetCurrentLocation(e)}> 
                        <option value={""}>none</option>
                        {data && data.map((item)=>{
                            return <option value={item.name} key={item.id}>{item.name}</option>
                        })}
                        </select></div>
                    <div className="user">{currentLocation === null  ? "Change your location": currentLocation}</div>
                </div>

                <div className="image">
                    <GoSearch fontSize="20px" className="search"/>
                    {ICONS.bellIcon()}
                </div>
</div>
        </LocationNavWrapper>
     );
}
 
export default LocationNav;

