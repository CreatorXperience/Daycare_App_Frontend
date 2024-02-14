import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const useIsCompatible = ()=>{
    let [isCompatible, setIsCompatible] =  useState<boolean>(false)
    const navigate =  useNavigate()
    useEffect(()=>{
        if(window.innerWidth <= 750){
          setIsCompatible(true)
        }
      },[])
    

      useEffect(()=>{
        if(isCompatible){
          navigate("/home")
        }else {
          navigate("/compatible")
        }
      },[isCompatible, navigate])

      return {setIsCompatible}
}

export default useIsCompatible