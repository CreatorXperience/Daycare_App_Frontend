import { useNavigate } from "react-router-dom"
import { TLastSeen } from "./type"
import LastSeenWrapper from "./LastSeenWrapper"




const  LastSeen = ({data}:TLastSeen)=>{
    const navigate = useNavigate()
    return (
        <LastSeenWrapper>
       {data.map((item,i)=>{
        return   item ?   <div className="seen-container" key={i} onClick={()=> navigate(`/details/${item._id}`)}>

        </div> : <div className="skeleton" key={i}>
        <div className="light">hi</div>
</div> 
       })}
        </LastSeenWrapper>
    )
}

export default LastSeen

