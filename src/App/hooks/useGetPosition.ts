import {useCallback, useMemo, useState} from "react"   

const useGetCurrentPosition = ()=> {

  const  [isPositionActive, setIsPositionActive] =  useState<boolean>(false)

  
  const [position, setPositionObj] = useState<GeolocationPosition |  null>(null)
  
  const onsucess = (success: GeolocationPosition)=>{
      console.log(success)
      setPositionObj(success)
    }
    
    const getPosition = ()=>{
      window.navigator.geolocation.getCurrentPosition(onsucess, onerror)
    }

    const getPositionCallback = useCallback(getPosition, [])

    const PositionMemo = useMemo(()=>{
      return {position,setPositionObj,getPositionCallback}
    }, [position,getPositionCallback])
    

    const onerror = (positionError: GeolocationPositionError)=>{
        console.log(positionError)
    }


    return  {getPositionCallback,  isPositionActive, setIsPositionActive,PositionMemo}
}

export default useGetCurrentPosition
