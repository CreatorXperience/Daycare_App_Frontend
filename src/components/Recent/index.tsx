import { GoClock, GoX } from "react-icons/go"
import useRecent from "./hooks/useRecent"
import RecentWrapper from "./RecentWrapper"
import { useNavigate } from "react-router-dom"


const Recent = ()=>{

    const {handleExpand,handleRemoveLastSeen,isExpand, user} =  useRecent()
    const navigate = useNavigate()
    
    return (
        <RecentWrapper isexpand={JSON.stringify(isExpand)} data={user?.search}>
            <div className="cont-wrapper">
        {user?.search && user.search.map((item, i)=>{
                  return       <div className="recent-cont" key={i} onClick={()=> navigate(`/result?term=${item}`)}>
                  <div className="recent-search"> 
                      <GoClock size="20px"/>
                      <div className="searchTerm">{item}</div>
                  </div>
                  <GoX onClick={(e)=> handleRemoveLastSeen(e, i)}/>
              </div>
            })}
        
            </div>
            <div className="btn-cont">
            <button className="see-more" onClick={(e)=> handleExpand(e)}>{isExpand ? "See Less": "See More"}</button>
            </div>
        </RecentWrapper>
    )
}

export default Recent
