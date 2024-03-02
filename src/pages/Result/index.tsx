import { Outlet, } from "react-router-dom"
import { GoBell, GoChevronLeft, GoSearch } from "react-icons/go"
import { colors } from "../../constants/colors"
import Header from "../../components/Header"
import NameInput from "../../components/NameInput"
import FilterSlider from "../../components/Filterslider"
import ResultCard from "../../components/ResultCard"
import useSearch from "./hooks/useSearch"
import Modal from "../../components/Modal"
import Filter from "../../components/Filter"
import ResultWrapper from "./ResultWrapper"
import {useState } from "react"
import { TChildCare } from "../Home/type"
import { TFiltered } from "./type"


const Result = ()=>{

    const {data,filter,handleInput,onSearchTermChanged,setFilter, input,isLoading, setIsFilterClicked,isFilterClicked,setData} = useSearch()
    const [isFilterLoading, setIsFilterLoading] = useState<boolean>(false)
    const [filtered, setFiltered] = useState<TFiltered>({location:"", minp:0, maxp: 600})

    let filterData = (data: TChildCare[])=>{
        let  filt =  data.filter((item)=> item.amount <= filtered.maxp)
        .filter((item)=> item.amount >= filtered.minp)
        .filter((item)=> item.exactLocation.includes(filtered.location))
        return filt
    }

    return (
        <ResultWrapper>
        <div className="result-cont">
        <Header title="Result">
            <GoChevronLeft size="30px" />
            <GoBell size="25px" />
            </Header>
            <form onSubmit={(e)=> onSearchTermChanged(e)}>

        <NameInput label="" 
        placeholder="search by name or location" 
        onChangeHandler={(e)=>  handleInput(e)}
        borderradius="15px"
        value={input}
        >
         <GoSearch className="eye" color={`${colors.primary.lightGray}`} fontSize="22px"/>
         </NameInput>
            </form>

            <FilterSlider setFilter = {setFilter} setIsFilterClicked={setIsFilterClicked}/>

        {data && filter === "amount" && filterData(data).sort((a,b)=>  Number(a["amount"])-Number(b["amount"])).reverse().map((item, i)=>{
            return     <ResultCard title={item.title} amount={item.amount} perDuration={item.perDuration} _id={item._id} key={i} location={item.location}/>
        })}

        {data && filter === "rating" && filterData(data).sort((a,b)=>  Number(a["rating"])-Number(b["rating"])).reverse().map((item, i)=>{
            return     <ResultCard title={item.title} amount={item.amount} perDuration={item.perDuration} _id={item._id} key={i} location={item.location}/>
        })}

        {data && data?.length < 1 && <p className="no-data">sorry we don't have a daycare for the specified search term, try search  with different keywords</p>}

        {(isLoading || isFilterLoading ) &&  <p className="loader"></p>}

        {isFilterClicked && <Modal ismodalopen={JSON.stringify(isLoading)}>
            <Filter setFiltered={setFiltered}  data={data}  setIsFilterLoading={setIsFilterLoading} setFilter={setFilter} setIsFilterClicked={setIsFilterClicked} />
            </Modal>}
        </div>
 
        <div className="result-footer">
        <Outlet />
        </div>
        </ResultWrapper>
    )
}

export default Result


