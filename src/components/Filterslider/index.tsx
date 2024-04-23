import { GoFilter } from "react-icons/go"
import { useSearchParams } from "react-router-dom"
import { TFilter } from "./type"
import FilterSliderWrapper from "./FilterSliderWrapper"





const FilterSlider = ({setFilter, setIsFilterClicked}: TFilter)=>{

    const [searchParams,setSearchParams]= useSearchParams()

    const handleClick = (term: string)=>{
        setFilter(term)
        setSearchParams({label: term})
    }


return (
    <FilterSliderWrapper>
        <div className="filter-cont">
        <button className="filter" onClick={()=> setIsFilterClicked(true)}><GoFilter /> <span>Filter</span></button>
        <button className={`${searchParams.get("label") === "rating" ? "color" : "normal"} `} onClick={()=> handleClick("rating")}><span>Rating</span></button>
        <button className={`${searchParams.get("label") === "amount" ? "color" : "normal"} `} onClick={()=> handleClick("amount")}><span>Amount</span></button>
        </div>
    </FilterSliderWrapper>
)
}

export default FilterSlider

