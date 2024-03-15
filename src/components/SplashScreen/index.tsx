import { TScreenprop } from "./type"
import SplashWrapper from "./SplashScreenWrapper"



const SmallSplashScreen = ({handleNext,start, end,keyword,desc, icons, button}: TScreenprop)=>{
    return (
        <SplashWrapper>
             <div className="icons-2">
               {icons}
            </div> 

            <div className="text">{start} <span className="k">{keyword}</span> {end}</div>
            <div className="desc">{desc}</div>

            <div className="btn-wrapper">
            <button className="Next"onClick={()=> handleNext()}>{button}</button>
            </div>
        </SplashWrapper>
    )
}

export default SmallSplashScreen

