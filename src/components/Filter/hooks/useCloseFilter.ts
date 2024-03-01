import { useRef } from "react"

const useCloseFilter = (setIsFilterClicked: React.Dispatch<React.SetStateAction<boolean>>,setFilter: React.Dispatch<React.SetStateAction<string>>)=>{
    const ref = useRef<HTMLDivElement | null>(null)

    const handleSlideDown = ()=>{
        if(ref && ref.current){
        setIsFilterClicked(false)
        ref.current.setAttribute("class", "slide-down")
    }
    }

    const handleFilter = (filterType: string)=>{
        setFilter(filterType)
        setIsFilterClicked(false)
    }

    return {handleFilter,handleSlideDown, ref}
}
export default useCloseFilter