import { useEffect, useMemo, useState } from "react"
import {  useNavigate,  } from "react-router-dom"


const useIsCompatible = (path: string)=>{
    let [isCompatible, setIsCompatible] =  useState<boolean | null>(null)
    const navigate =  useNavigate()


    const isCompatibleMemo = useMemo(()=>{
      return isCompatible
    },[isCompatible])

 
      useEffect(()=>{
        if(isCompatibleMemo){
          navigate(path)   
        }
        else{
          navigate("/compatible")
        }
      },[isCompatibleMemo, navigate, path])

      return {setIsCompatible, isCompatibleMemo}
}

export default useIsCompatible