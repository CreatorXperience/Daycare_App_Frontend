import { useEffect, useState } from "react"
import useGetCurrentPosition from "../../../App/hooks/useGetPosition"
import { TDistanceProps } from "../../../utils/locationAlgo"
import { TLocation } from "../type"



const useGetDistance =({location}: TLocation)=>{
    
    const {PositionMemo,getPositionCallback} = useGetCurrentPosition()
    let [position, setPosition] = useState<TDistanceProps>()

    useEffect(()=>{
        getPositionCallback()
    },[getPositionCallback])

    useEffect(()=>{
        if(PositionMemo && location){
            setPosition({
                lat1: PositionMemo.position?.coords.latitude as number,
                lat2: +location?.coordinates[1]  as number,
                lon1: PositionMemo.position?.coords.longitude as number,
                lon2: +location?.coordinates[0] as number
            })
        }
    },[PositionMemo])


    return {position}
}

export default useGetDistance