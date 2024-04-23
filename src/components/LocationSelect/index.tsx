import { GoLocation } from "react-icons/go"
import { colors } from "../../constants/colors"
import useGetStates from "../LocationNav/hooks/useGetState"
import { TSelect } from "./type"
import LocationSelectWrapper from "./LocationSelectWrapper"



const LocationSelect = ({handleSelect, disabled, value, children}:TSelect)=>{
    const {data} = useGetStates()
    return (
        <LocationSelectWrapper>
    <div className="box">
    <GoLocation size={"20px"} color={colors.primary.textGray} />
    <select id="location" onChange={(e)=> handleSelect(e) } disabled={disabled}>
   {value ? <option  value={value}>{value}</option>: ""}
        {data && data.filter((item)=> item.country.toLowerCase().charAt(0) === "n" && item.country.toLowerCase().charAt(1) === "i").map((item, i)=>{
            return <option  value={`${item.city} , ${item.country}`} key={i}>{`${item.city} , ${item.country}`}</option>
        })}

        {!data && <option  value={""} disabled> loading </option> }
    </select>
    {children ?  children : "" }
    </div>
        </LocationSelectWrapper>
    )
}

export default LocationSelect


