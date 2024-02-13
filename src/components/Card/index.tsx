import ICONS from "../../constants/icons"
import CardWrapper from "./CardWrapper"

const Card = ()=>{
    return (
        <CardWrapper>
        <div className="card">

        <div className="image">
        
        </div>

        <div className="info">
            <div className="childcare-name">
            <div>ChildCare</div>
            <div>Distance(3km)</div>
            </div>

            <div className="stars">
                {ICONS.starIcon()}
                {ICONS.starIcon()}
                {ICONS.starIcon()}
                {ICONS.starIcon()}
            </div>
        </div>
        </div>
        </CardWrapper>
    )
}

export default Card


