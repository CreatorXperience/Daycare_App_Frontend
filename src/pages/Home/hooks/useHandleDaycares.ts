import { useEffect, useMemo, useState } from "react"
import useGetDaycares from "./useGetDayCares"
import useGetCurrentPosition from "../../../App/hooks/useGetPosition"
import useGetCoordinates from "./useGetCoordinates"
import { TLoginResponse } from "../../Auth/Login/type"

const useHomeLogic = ()=>{

    const [location, setLocation] = useState<string>()
    const {setCoordinates,data, coordinates} =  useGetDaycares()
    const {getPositionCallback, PositionMemo} =  useGetCurrentPosition()
    const {data:cordinatesData,setValue} = useGetCoordinates()

    const [childData] = useState({
        percentage: "99%"
    })


    useEffect(()=>{
        if(location){
            let locationPaylod =   {city: location, country: "Nigeria"}
            setValue(locationPaylod)
        }
    },[location])


    useEffect(()=>{
        if(cordinatesData){
            let pos = {lat: cordinatesData[0].latitude, long: cordinatesData[0].longitude}
            setCoordinates(pos)
        }
    },[cordinatesData])
    

    
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


     return {setLocation, coordinates, data, childData}
}


export default useHomeLogic
