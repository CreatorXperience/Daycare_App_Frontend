import { GoArrowRight } from "react-icons/go"
import { TListProps } from "./type"
import ListWrapper from "./ListWrapper"
import { useNavigate } from "react-router-dom"


const List = ({right, left}: TListProps)=>{
    const navigate = useNavigate()
    
    return (
       <ListWrapper> 
        <div className="list-container"> 
        <div className="left">{left}</div>
        {right && <div className="right" onClick={()=> navigate("/viewall")}>{right}
        <span><GoArrowRight /></span>
        </div>}
        </div>
       </ListWrapper>
    )
}

export default List

