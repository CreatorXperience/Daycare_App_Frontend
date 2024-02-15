import { useEffect, useState } from "react"
import {  useNavigate,  } from "react-router-dom"


const useIsCompatible = (path: string)=>{
    let [isCompatible, setIsCompatible] =  useState<boolean | null>(null)
    const navigate =  useNavigate()
    useEffect(()=>{
        if(window.innerWidth <= 1200){
          setIsCompatible(true)
        }
      },[])
    

      useEffect(()=>{
        if(isCompatible){
          navigate(path)   
        }
        else{
          navigate("/compatible")
        }
      },[isCompatible, navigate, path])

      return {setIsCompatible}
}

export default useIsCompatible