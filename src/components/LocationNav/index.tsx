import { GoKebabHorizontal, GoSearch } from "react-icons/go";
import LocationNavWrapper from "./HelloUserWrapper";
import useLocation from "./hooks/useLocation";
import { TLocation } from "./type";
import useGetStates from "./hooks/useGetState";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom";



const LocationNav = ({setLocation,setIsCoordinatesLoading}:TLocation) => {
    const  {currentLocation,handleSetCurrentLocation} =  useLocation(setLocation)
    const {data, isFetching} = useGetStates()
    const navigate = useNavigate()

    useEffect(()=>{
        setIsCoordinatesLoading(isFetching)
    },[isFetching,setIsCoordinatesLoading])


    return ( 
        <LocationNavWrapper>
            <div className="location-nav-wrapper">
                <div className="location-header">
                    <div className="location">Location<select onChange={(e)=> handleSetCurrentLocation(e)}> 
                        <option value={""}>none</option>
                        {data && data.map((item,i)=>{
                            return <option value={`${item.city},${item.country}`} key={i}>{`${item.city},${item.country}`}</option>
                        })}
                        </select></div>
                    <div className="user">{currentLocation === null  ? "Change your location": currentLocation}</div>
                </div>

                <div className="image">
                    <GoSearch fontSize="20px" className="search" onClick={()=> navigate("/search")}/>
                </div>
</div>
        </LocationNavWrapper>
     );
}
 
export default LocationNav;

