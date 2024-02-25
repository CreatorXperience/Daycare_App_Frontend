import { TDescription } from "./type"
import useExpand from "./hooks/useExpand"
import DetailsDescriptionWrapper from "./DescriptionWrapper"


const DetailsDescription = ({desc}: TDescription)=>{
    const {handleExpand,isExpand} = useExpand()
 
    return (
        <DetailsDescriptionWrapper isExpand={isExpand}>
        <div className="details-container">
        <span>
        {desc}
            </span> 
        <span className="expand" onClick={(e)=> handleExpand(e)}>{isExpand ? "Read less": "Read more"}</span>
        </div>
        </DetailsDescriptionWrapper>
    )
}

export default DetailsDescription

