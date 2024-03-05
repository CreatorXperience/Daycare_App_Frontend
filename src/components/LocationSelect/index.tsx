import { GoLocation, GoPencil } from "react-icons/go"
import { colors } from "../../constants/colors"
import useGetStates from "../LocationNav/hooks/useGetState"
import { TSelect } from "./type"
import styled from "styled-components"



const LocationSelect = ({handleSelect, disabled, value, children}:TSelect)=>{
    const {data} = useGetStates()
    return (
        <LocationSelectWrapper>
    <div className="box">
    <GoLocation size={"20px"} color={colors.primary.textGray} />
    <select id="location" onChange={(e)=> handleSelect(e) } disabled={disabled}>
   {value ? <option  value={value}>{value}</option>: ""}
        {data && data.map((item, i)=>{
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


const LocationSelectWrapper = styled.div`
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