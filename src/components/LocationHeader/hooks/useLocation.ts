import { useEffect, useState } from "react"


const useLocation  = (setLocation:React.Dispatch<React.SetStateAction<string | undefined>>)=>{
    let  [currentLocation, setCurrentLocation] = useState<string| null>(null)

    
    const handleSetCurrentLocation = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        e.preventDefault()
        setCurrentLocation(e.target.value)
    }

    return {currentLocation,  handleSetCurrentLocation}
}

export default useLocation