import { GoClock, GoPencil } from "react-icons/go"
import { colors } from "../../constants/colors"
import styled from "styled-components"
import { ReactNode } from "react"


type THourProp = {
    disabled?: boolean,
    userClosingHour?: number,
    userOpeningHour?:number,
    children?: ReactNode,
    onTimeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
const HourSelect = ({disabled, userClosingHour,userOpeningHour, children, onTimeChange}: THourProp)=>{
    let hours = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
    ]

    const getTime = (hour: number) => {
        if(hour > 11){
            return `${hour} PM`
        }
        return `${hour} AM`
    }
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

const HourSelectWrapper = styled.div`
    width: 100%;

.box {
               width: 100%;
               height: 60px;
               border: 1px solid red;
               display: flex;
               justify-content: space-between;
               align-items: center;
               margin-top: 8px;
               border: 2px solid ${colors.primary.lightGray};
               border-radius: 12px;
               padding: 12px;
               margin-bottom: 30px;

               select {
               width: 95%;
               height: 40px;
               background-color: ${colors.primary.white};
               border: none;
               padding: 8px;
               outline: none;
             }
             }
`