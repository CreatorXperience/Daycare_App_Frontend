import { useEffect, useRef } from "react"

const useResizeObeserver = (setIsCompatible: React.Dispatch<React.SetStateAction<boolean>>)=> {
    const screenRef = useRef<HTMLDivElement | null>(null)


    let observer =  new ResizeObserver((resizeEntry)=>{
        let [entryObj] = resizeEntry
        let width = entryObj.contentRect.width
        
        if(width <= 1200){
         setIsCompatible(true)
        }
        else if(width >= 1200){
          setIsCompatible(false)
        }
        })


        useEffect(()=>{
            if(screenRef?.current){
              observer.observe(screenRef.current, {box:"border-box"})
            }
          })

 return {observer, screenRef}
}

export default useResizeObeserver