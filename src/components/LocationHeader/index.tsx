import { GoSearch } from "react-icons/go";
import ICONS from "../../constants/icons";
import LocationNavWrapper from "./HelloUserWrapper";
import useLocation from "./hooks/useLocation";


const LocationNav = () => {
    const  {currentLocation,handleSetCurrentLocation} =  useLocation()
    return ( 
        <LocationNavWrapper>
            <div className="location-nav-wrapper">
                <div className="location-header">
                    <div className="location">Location<select onChange={(e)=> handleSetCurrentLocation(e)}> 
                        <option value={""}>none</option>
                        <option value="Lagos">Lagos</option>
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

