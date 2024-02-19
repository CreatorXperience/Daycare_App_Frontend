import { GoSearch } from "react-icons/go";
import ICONS from "../../constants/icons";
import LocationNavWrapper from "./HelloUserWrapper";

const LocationNav = () => {
    return ( 
        <LocationNavWrapper>
            <div className="location-nav-wrapper">
                <div className="location-header">
                    <div className="location">Location <select> 
                        <option value="car">Lagos</option>
                        <option value="" selected></option>
                        </select></div>
                    <div className="user">Lagos</div>
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

