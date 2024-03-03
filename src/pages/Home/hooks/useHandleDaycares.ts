import { useContext, useEffect, useMemo, useState } from "react"
import useGetDaycares from "./useGetDayCares"
import useGetCurrentPosition from "../../../App/hooks/useGetPosition"
import useGetCoordinates from "./useGetCoordinates"
import { TLoginResponse } from "../../Auth/Login/type"
import { UserContext } from "../../../App/App"

const useHomeLogic = ()=>{

    const [location, setLocation] = useState<string>()
    const [isCoordinatesLoading, setIsCoordinatesLoading] = useState<boolean>(false)
    const {setCoordinates,data, coordinates,isLoading} =  useGetDaycares()
    const {getPositionCallback, PositionMemo} =  useGetCurrentPosition()
    const {data:cordinatesData,setValue} = useGetCoordinates()
    const user = useContext(UserContext)

    const [childData] = useState({
        percentage: "99%"
    })

    useEffect(()=>{
        if(location){
            let  [city, country] = location.trim().split(",")
            let locationPaylod =   {city, country}
            setValue(locationPaylod)
        }
    },[location, setValue])


    useEffect(()=>{
        if(cordinatesData &&  cordinatesData.length > 0){
            let pos = {lat: cordinatesData[0].latitude, long: cordinatesData[0].longitude}
            setCoordinates(pos)
        }
    },[cordinatesData, setCoordinates])
    

    
    const positionValue  = useMemo(()=>{
        let lat = PositionMemo?.position?.coords.latitude
        let long = PositionMemo?.position?.coords.longitude
        
        return {lat: lat as number,long: long as number}
    }, [PositionMemo])



    useEffect(()=>{
        getPositionCallback()
      },[getPositionCallback])

    useEffect(()=>{
            setCoordinates(positionValue)
    },[positionValue, setCoordinates])



    useEffect(()=>{
        let user =  localStorage.getItem("DayCareuserLoginInfo")
        if(user){ 
         let parsedUserObj = JSON.parse(user) as TLoginResponse
        if(!parsedUserObj.message.isVerified){
            // return navigate("/verify")
        }
        }
    },[])


  
    useEffect(()=> {
        if(isLoading || isCoordinatesLoading){
            user?.setIsModalOpen(true)
          return 
        }else{
            user?.setIsModalOpen(false)
        }
    }, [isLoading, user, isCoordinatesLoading])





     return {setLocation, coordinates, data, childData, setIsCoordinatesLoading}
}


export default useHomeLogic
