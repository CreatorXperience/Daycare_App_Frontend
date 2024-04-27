import { Link, useNavigate } from "react-router-dom"
import HeaderWrapper from "./HeaderWrapper"
import { THeader } from "./type"
import useNav from "./hooks/useNav"



const Header = ({children, title}: THeader)=>{
    const navigate = useNavigate()
    const {onOpenNav,openNav} =  useNav()


    const logOut = ()=>{
        localStorage.removeItem("DayCareuserLoginInfo")
        localStorage.removeItem("lastSearch")
        localStorage.removeItem("lastSeen")
        navigate("/")
    }
    return (
        <HeaderWrapper>
            <div className="header-container"> 
            <div className={`nav ${openNav ? "open": "close" }`}>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/chats"><li>Chat</li></Link>
                <Link to="/userprofile"><li>Profile</li></Link>
             <li onClick={()=> logOut()}>logout</li> 
            </div>
            <div className="icon-left" onClick={()=> navigate("/home")}>{children[0]}</div>
            <div className="page-title">{title}</div>
            {children[2] ? children[2] : ""}
            <div className="icon-right" onClick={(e)=> onOpenNav(e)} > {children[1]} </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header


