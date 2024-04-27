import { GoClock } from "react-icons/go"
import { colors } from "../../constants/colors"
import { THourProp } from "./type"
import HourSelectWrapper from "./HourSelectWrapper"
import getTime from "../../utils/getTime"
import { memo, useState } from "react"
import { size } from "lodash"

const HourSelect = memo(({disabled, userClosingHour,userOpeningHour, children, onTimeChange,size}: THourProp)=>{
    let [hours] = useState([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
    ])

        return (
            <HourSelectWrapper size={size}>
        <div className="box">
        <GoClock size={"20px"} color={colors.primary.textGray} />
        <select id="location" value={userOpeningHour ? userOpeningHour : userClosingHour}  disabled={disabled} onChange={(e)=> onTimeChange(e)}>
       {userClosingHour ? <option  value={userClosingHour}>{getTime(userClosingHour)}</option>: ""}
       {userOpeningHour ? <option  value={userOpeningHour}>{getTime(userOpeningHour)}</option>: ""}
       {hours && hours.map((hour, i)=>{
         return <option  value={`${hour}`} key={i}>{getTime(hour)}</option>
         })}
        </select>
        {children ? children : ""}
        </div>
            </HourSelectWrapper>
)
})

export default HourSelect

