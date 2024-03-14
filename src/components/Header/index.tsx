import { useNavigate } from "react-router-dom"
import HeaderWrapper from "./HeaderWrapper"
import { THeader } from "./type"



const Header = ({children, title}: THeader)=>{
    const navigate = useNavigate()
    return (
        <HeaderWrapper>
            <div className="header-container"> 
            <div className="icon-left" onClick={()=> navigate(-1)}>{children[0]}</div>
            <div className="page-title">{title}</div>
            {children[2] ? children[2] : ""}
            <div className="icon-right"> {children[1]} </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header


