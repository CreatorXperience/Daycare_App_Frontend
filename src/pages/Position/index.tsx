import styled from "styled-components"
import SmallSplashScreen from "../../components/SplashScreen"
import ICONS from "../../constants/icons"
import { colors } from "../../constants/colors"
import useGetCurrentPosition from "../../App/hooks/useGetPosition"
import { useNavigate } from "react-router-dom"
import PositionWrapper from "./PositionWrapper"

const Position = ()=> {
    const {getPositionCallback} =  useGetCurrentPosition()
    
    const navigate = useNavigate()
    const handleGetLocation = ()=> {
        getPositionCallback()
        navigate("/home")
    }
return (
    <PositionWrapper>
    <SmallSplashScreen 
    icons={ICONS.brandIcon4()}
    desc="we need your location to help you find the nearest childcare center"
    end="Your Location"
    start="Let's"
    keyword="Determine"
    handleNext={handleGetLocation}
    button="use current location"
    />
    </PositionWrapper>
)
}

export default Position


