import { useNavigate, useLocation } from "react-router-dom"
import { TChildCare, TCoordinates } from "../../pages/Home/type"
import calculateDistance from "../../utils/locationAlgo"
import CardWrapper from "./CardWrapper"
import useHandleData from "./hooks/useHandleData"


type TCardProps = {
    data: TChildCare,
    coordinates: TCoordinates | undefined
}

const Card = ({data, coordinates}: TCardProps)=>{

  const {coordinatesPayload, getStars} = useHandleData(coordinates,data)
  const  navigate = useNavigate()
  const history = useLocation()
//   history.pathname = `/details/${data._id}`
  

    return (
        <CardWrapper>
        <div className="card" onClick={()=> navigate(`/details/${data._id}`)}>

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


