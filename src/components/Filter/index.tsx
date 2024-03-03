import { GoLocation, GoX } from "react-icons/go"
import { colors } from "../../constants/colors"
import FilterWrapper from "./FilterWrapper"
import useCloseFilter from "./hooks/useCloseFilter"
import type { TFilter } from "./type"
import useGetStates from "../LocationNav/hooks/useGetState"
import useCustomFilter from "./hooks/useCustomFIlter"


const Filter = ({setIsFilterClicked, setFilter, setFiltered}:TFilter)=>{
const {handleFilter,handleSlideDown, ref} = useCloseFilter(setIsFilterClicked,setFilter)
const {data} = useGetStates()
const {handleChangeMaxPrice,handleChangeMinPrice,handleSelect,handleSubmit} = useCustomFilter(setFiltered,setIsFilterClicked)

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

<form className="form-container" onSubmit={(e)=> handleSubmit(e) }>
    <label htmlFor="location" className="location">Location</label>
    <div className="box">
        <GoLocation size={"20px"} color={colors.primary.textGray} />
    <select id="location" onChange={(e)=> handleSelect(e) }>
        {data && data.map((item, i)=>{
            return <option  value={`${item.city} , ${item.country}`} key={i}>{`${item.city} , ${item.country}`}</option>
        })}

        {!data && <option  value={""} disabled> loading </option> }
    </select>
    </div>
    <label htmlFor="price" className="price">Price</label>

    <div className="input-container">
    <input type="number" placeholder="Max price"  id="price" onChange={(e)=> handleChangeMaxPrice(e)}/>
    <input type="number" placeholder="Min price" id="price" onChange={(e)=> handleChangeMinPrice(e)} />
    </div>
        

    <button className="continue" type="submit">Continue</button>
</form>
    </div>
</div>
    </div>
        </FilterWrapper>
    )
}

export default Filter