import { useRef } from "react"
import { useSearchParams } from "react-router-dom"

const useCloseFilter = (setIsFilterClicked: React.Dispatch<React.SetStateAction<boolean>>,setFilter: React.Dispatch<React.SetStateAction<string>>)=>{
    const ref = useRef<HTMLDivElement | null>(null)


    const [searchParams, setSearchParams]= useSearchParams()

    const handleSlideDown = ()=>{
        if(ref && ref.current){
        setIsFilterClicked(false)
        ref.current.setAttribute("class", "slide-down")
    }
    }

    const handleFilter = (filterType: string)=>{
        setFilter(filterType)
        setIsFilterClicked(false)
        setSearchParams({label: filterType})
    }

    return {handleFilter,handleSlideDown, ref, searchParams}
}
export default useCloseFilter