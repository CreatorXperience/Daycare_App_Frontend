import { useNavigate} from "react-router-dom"
import { TChildCare, TCoordinates } from "../../pages/Home/type"
import calculateDistance from "../../utils/locationAlgo"
import CardWrapper from "./CardWrapper"
import useHandleData from "./hooks/useHandleData"
import useSeen from "./hooks/useSeen"


type TCardProps = {
    data: TChildCare,
    coordinates: TCoordinates | undefined
}

const Card = ({data, coordinates}: TCardProps)=>{

  const {coordinatesPayload, getStars} = useHandleData(coordinates,data)
  const {handleNavigateAndSaveLastSeen} = useSeen()

    return (
        <CardWrapper>
        <div className="card" onClick={()=> handleNavigateAndSaveLastSeen(data._id) }>

        <div className="image">
        
        </div>

        <div className="info">
            <div className="childcare-name">
            <div>{data.title}</div>
            <div>Distance {calculateDistance(coordinatesPayload)}km</div>
            </div>

            <div className="stars">
             {getStars(data.rating)}
            </div>
        </div>
        </div>
        </CardWrapper>
    )
}

export default Card


