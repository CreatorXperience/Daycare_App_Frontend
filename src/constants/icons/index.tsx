import  home from "../../assets/home.svg"
import bell from "../../assets/bell.svg"
import activeBell from "../../assets/active-notification.svg"
import gmail from "../../assets/gmail.svg"
import facebook from "../../assets/facebook.svg"
import brand1 from "../../assets/brand 1.svg"
import brand2 from "../../assets/brand 2.svg"
import brand3 from "../../assets/brand 3.svg"
import brand4 from "../../assets/brand 4.svg"
import input from "../../assets/input Icon.svg"
import list from "../../assets/list.svg"
import location from "../../assets/location-icon.svg"
import location2 from "../../assets/location-icon.svg"
import pen from '../../assets/pen.svg'
import plus from "../../assets/plus.svg"
import profile from "../../assets/profile.svg"
import promo from "../../assets/promo.svg"
import star from "../../assets/star.svg"
import trashCan from "../../assets/trash-can.svg"
import eye from "../../assets/visiblity.svg"
import caretLeft from "../../assets/caret-left.svg"

const ICONS = {
    homeIcon: ()=>(
        <img src={home} alt="home" />
    ),
    bellIcon: ()=> (
        <img src={bell} alt="bell"></img>
    ),
    activeNotificationIcon: ()=>(
        <img src={activeBell} alt="active-notification-bell"></img>
    ),
    gmailIcon: ()=>(
        <img src={gmail} alt="gmail"></img>  
    ),
    facebookIcon: ()=>(
    <img src={facebook} alt="facebook"></img>  
    ),
    brandIcon1: ()=>(
        <img src={brand1} alt="brand"></img>  
    ),
    brandIcon2: ()=>(
        <img src={brand2} alt="brand"></img>  
    ),
    brandIcon3: ()=>(
        <img src={brand3} alt="brand"></img>  
    ),
    brandIcon4: ()=>(
        <img src={brand4} alt="brand4"></img>  
    ),
    inputIcon: ()=>(
        <img src={input} alt="input"></img>  
    ),
    listIcon: ()=>(
        <img src={list} alt="list-icon"></img>  
    ),
    locationIcon: ()=>(
        <img src={location} alt="location"></img>  
    ),
    locationIcon2: ()=>(
        <img src={location2} alt="location"></img>  
    ),
    penIcon: ()=>(
        <img src={pen} alt="pen"></img>  
    ),
    plusIcon: ()=>(
        <img src={plus} alt="plus icon"></img>  
    ),
    profileIcon: ()=>(
        <img src={profile} alt="profile"></img>  
    ),
    promoIcon: ()=>(
        <img src={promo} alt="promo"></img>  
    ),
    starIcon: ()=>(
        <img src={star} alt="star icon"></img>  
    ),
    trashCanIcon: ()=>(
        <img src={trashCan} alt="trash can"></img>  
    ),
    eyeIcon: ()=>(
        <img src={eye} alt="eye icon"></img>  
    ),
    caretLeft: ()=>(
        <img src={caretLeft} alt="caret icon"></img> 
    )
    

}

export default ICONS