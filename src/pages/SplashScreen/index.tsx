import useSlide from "./hooks/useSlide"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import ICONS from "../../constants/icons"
import { Link, useNavigate } from "react-router-dom"
import SmallSplashScreen from "../../components/SplashScreen"
import SplashScreenWrapper from "./SplashScreenWrapper"
import {useLayoutEffect } from "react"
import useGetuserInfoFromStorage from "../../utils/useGetUserInfoFromStorage"

const SplashScreen = ()=> {
    const {$ref, handleNext, handlePrev} =  useSlide(3)
    const {user} = useGetuserInfoFromStorage()
    const navigate =useNavigate()

    useLayoutEffect(()=>{
    if(user){
        navigate("/position")
    }
    },[user, navigate])

return (
    <SplashScreenWrapper>

        <div className="slider-container" ref={$ref}>
        <div className="container">
            <div className="icons">
                {ICONS.brandIcon1("160px")}
                <div className="Brand">Childcare</div>
            </div>

            <div className="text">Join With <span className="k">10K</span> Other People</div>
            <div className="desc">Join with us and find your best child daycare</div>
            <div className="action">
           
           <Link to="/login"><button className="login">Login</button></Link> 
           <Link to="/signup"><button className="signup">Signup</button></Link> 
            </div>
        </div>
        <div className="container">
            <SmallSplashScreen start="Your Child"
            icons={ICONS.brandIcon2()}
             end="Is Our Priority"
              handleNext={handleNext}
               keyword="Safety" 
               desc="We always provide security in looking after your child"
               button="Next"
               />
        </div>
        <div className="container">
        <SmallSplashScreen start="Trust Your"
            icons={ICONS.brandIcon3()}
             end="With Us"
              handleNext={handleNext}
               keyword="Child" 
               desc="We have passed strict licensing so it can operate"
               button="Next"
               />
        </div>

        <button className="prev" onClick={()=> handlePrev()}><GoChevronLeft /></button>
        <button className="next"onClick={()=> handleNext()}> <GoChevronRight /></button>
        </div>
    </SplashScreenWrapper>
)
}
export default SplashScreen

