import { GoLocation, GoX } from "react-icons/go"
import { colors } from "../../constants/colors"
import FilterWrapper from "./FilterWrapper"
import useCloseFilter from "./hooks/useCloseFilter"
import type { TFilter } from "./type"
import useGetStates from "../LocationHeader/hooks/useGetState"
import { useState } from "react"


type TFilterPayload = {
    location: string,
    max: string,
    min: string
}
const Filter = ({setIsFilterClicked, setFilter}:TFilter)=>{
const {handleFilter,handleSlideDown, ref} = useCloseFilter(setIsFilterClicked,setFilter)
const {data} = useGetStates()
const [filterPayload, setFilterPayload] = useState<TFilterPayload>({location: "", max: "", min:""})


const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    e.preventDefault()
    setFilterPayload({...filterPayload, location: e.target.value})
}


    return (
        <FilterWrapper>
        <div className="filter-container">
        <div className="overlay" onClick={()=> setIsFilterClicked(false)}></div>
<div className="main-container" ref={ref}>
    <div className="close"><GoX  className="X" color={colors.primary.textGray} size="25px" onClick={()=> handleSlideDown()} /></div>
    <div className="title">Filter</div>
    <div className="sort-title">Sort by</div>
    <div className="button-container">
    <button className="relevant" ><span>Relevant</span></button>
<button className="normal" onClick={()=> handleFilter("rating")} ><span>Rating</span></button>
<button className="normal" onClick={()=> handleFilter("amount")} ><span>Amount</span></button>

<form className="form-container">
    <label htmlFor="location" className="location">Location</label>
    <div className="box">
        <GoLocation size={"20px"} color={colors.primary.textGray} />
    <select id="location" defaultValue="Pick a location" onChange={(e)=> handleSelect(e) }>
        {data && data.map((item)=>{
            return <option value={item.name} key={item.id}> {item.name} </option>
        })}
    </select>
    </div>
    <label htmlFor="price" className="price">Price</label>

    <div className="input-container">
    <input type="number" placeholder="Max price"  id="price"/>
    <input type="number" placeholder="Min price" id="price"  />
    </div>
  
    <button className="continue">Continue</button>
</form>
    </div>
</div>
    </div>
        </FilterWrapper>
    )
}

export default Filter