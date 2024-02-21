import { Outlet} from "react-router-dom"
import HomeWrapper from "./HomeWrapper"
import LocationNav from "../../components/LocationHeader"
import SafetyCard from "../../components/SafetyCard"
import { useContext, useEffect, useMemo, useState } from "react"
import OwnADayCare from "../../components/OwnADayCare"
import ChildCareCard from "../../components/ChildCareCard"
import List from "../../components/List"
import { TLoginResponse } from "../Auth/Login/type"
import useGetDaycares from "./hooks/useGetDayCares"
import useGetPosition from "../../App/hooks/useGetPosition"


const Home = ()=>{
    const [childData] = useState({
        percentage: "99%"
    })
    

    const {setCoordinates,data, coordinates} =  useGetDaycares()
    const {getPositionCallback, PositionMemo} =  useGetPosition()

    
    const positionValue  = useMemo(()=>{
        let lat = PositionMemo?.position?.coords.latitude
        let long = PositionMemo?.position?.coords.longitude
        
        return {lat: lat as number,long: long as number}
    }, [PositionMemo])

    useEffect(()=>{
        getPositionCallback()
      },[])

    useEffect(()=>{
            setCoordinates(positionValue)
    },[positionValue])



    useEffect(()=>{
        let user =  localStorage.getItem("DayCareuserLoginInfo")
        if(user){ 
         let parsedUserObj = JSON.parse(user) as TLoginResponse
        if(!parsedUserObj.message.isVerified){
            // return navigate("/verify")
        }
        }
    },[])


    return (
        <HomeWrapper>
        <div className="home-container">
        <div className="body">
        <LocationNav />
        <SafetyCard data={childData} />
        <List right="View all" left="Around you" />
        <ChildCareCard data={data}  coordinates={coordinates}/>
        <List left="Own  a day care"  />
        <OwnADayCare />
        </div>
        <div className="footer">
        <Outlet />
        </div>

        </div>
        </HomeWrapper>
    )
}

export default Home

