import { FaDollarSign } from "react-icons/fa"
import { colors } from "../../constants/colors"
import { TChildCare } from "../../pages/Home/type"
import { useNavigate } from "react-router-dom"
import calculateDistance from "../../utils/locationAlgo"
import { GoLocation } from "react-icons/go"
import useGetDistance from "./hooks/useGetDistance"
import { TLocation } from "./type"
import ResultCardWrapper from "./ResulCardWrapper"




const ResultCard = ({amount,perDuration,title, _id, location}:Partial<TChildCare>)=>{
    const navigate = useNavigate()
    const {position} = useGetDistance(location as TLocation)

    return (
        <ResultCardWrapper onClick={()=> navigate(`/details/${_id}`)}>
            <div className="result-card-cont">
                <div className="result-image">

                </div>
                <div className="result-details">
                    <div className="details">
                        <p className="title">{title}</p>
                        <p><GoLocation color={colors.primary.cyan} />{calculateDistance(position)}km</p>
                    </div>

                    <div className="amount"><FaDollarSign  color={colors.primary.yellow}/><span className="digit">{amount}</span> <span className="duration">/{perDuration}hr</span></div>
                </div>
            </div>
        </ResultCardWrapper>
    )
}


export default ResultCard

