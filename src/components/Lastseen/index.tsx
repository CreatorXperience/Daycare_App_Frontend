import { useNavigate } from "react-router-dom"
import { TLastSeen } from "./type"
import LastSeenWrapper from "./LastSeenWrapper"




const  LastSeen = ({data}:TLastSeen)=>{
    const navigate = useNavigate()
    return (
        <LastSeenWrapper id={data && data.image} onClick={()=> navigate(`/details/${data._id}`)}>
        <div className="seen-container">
        <div className="image"></div>
        </div>
        <div className="light"></div>    
        </LastSeenWrapper>
    )
}

export default LastSeen

