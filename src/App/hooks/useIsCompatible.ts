import { createContext, useEffect, useMemo, useState } from "react"
import {  useNavigate,  } from "react-router-dom"



// type TCompatible = {
// isCompatible: boolean | null,
// setIsCompatible: React.Dispatch<React.SetStateAction<boolean | null>>
// }

// export const isCompatibleContext = createContext<TCompatible | null>(null)

const useIsCompatible = (path: string)=>{
    let [isCompatible, setIsCompatible] =  useState<boolean | null>(null)
    const navigate =  useNavigate()


    const isCompatibleMemo = useMemo(()=>{
      return isCompatible
    },[isCompatible])

    // useEffect(()=>{
    //     if(window.innerWidth <= 1200){
    //         console.log(true)
    
    //       setIsCompatible(true)
    //       return
    //     }


    //   setIsCompatible(false)

   
    //   },[])

  
    

      useEffect(()=>{
        if(isCompatible){
          navigate(path)   
        }
        else{
          navigate("/compatible")
        }
      },[isCompatible, navigate, path])

      return {setIsCompatible, isCompatible}
}

export default useIsCompatible