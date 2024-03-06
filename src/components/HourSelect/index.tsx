import { GoClock } from "react-icons/go"
import { colors } from "../../constants/colors"
import { THourProp } from "./type"
import HourSelectWrapper from "./HourSelectWrapper"
import getTime from "../../utils/getTime"

const HourSelect = ({disabled, userClosingHour,userOpeningHour, children, onTimeChange}: THourProp)=>{
    let hours = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
    ]

        return (
            <HourSelectWrapper>
        <div className="box">
        <GoClock size={"20px"} color={colors.primary.textGray} />
        <select id="location"  disabled={disabled} onChange={(e)=> onTimeChange(e)}>
       {userClosingHour ? <option  value={userClosingHour}>{getTime(userClosingHour)}</option>: ""}
       {userOpeningHour ? <option  value={userOpeningHour}>{getTime(userOpeningHour)}</option>: ""}
            {!userOpeningHour &&  !userClosingHour && hours && hours.map((hour, i)=>{
                return <option  value={`${hour}`} key={i}>{getTime(hour)}</option>
            })}
        </select>
        {children ? children : ""}
        </div>
            </HourSelectWrapper>

)
}

export default HourSelect

