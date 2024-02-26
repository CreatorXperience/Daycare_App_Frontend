import { useState } from "react"

const useExpand = ()=>{
    const [isExpand, setIsExpand] =  useState<boolean>(false)
    
    const handleExpand = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        e.preventDefault()
        setIsExpand(!isExpand)
    }

    return {isExpand,handleExpand}
}

export default useExpand