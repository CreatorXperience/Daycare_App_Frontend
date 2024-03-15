import { Outlet, } from "react-router-dom"
import { GoChevronLeft, GoKebabHorizontal, GoSearch } from "react-icons/go"
import { colors } from "../../constants/colors"
import Header from "../../components/Header"
import NameInput from "../../components/NameInput"
import FilterSlider from "../../components/Filterslider"
import ResultCard from "../../components/ResultCard"
import useSearch from "./hooks/useSearch"
import Modal from "../../components/Modal"
import Filter from "../../components/Filter"
import ResultWrapper from "./ResultWrapper"

const Result = ()=>{

    const {
        data,
        filter,
        handleInput,
        onSearchTermChanged,
        setFilter,
        input,
        isLoading,
        setIsFilterClicked,
        isFilterClicked,
        setFiltered, 
        filterData
    } = useSearch()

    return (
        <ResultWrapper>
        <div className="result-cont">
        <Header title="Result">
            <GoChevronLeft size="30px" />
            <GoKebabHorizontal size="25px" />
            </Header>
            <form onSubmit={(e)=> onSearchTermChanged(e)}>

        <NameInput 
        type="text"
        label="" 
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
            return     <ResultCard title={item.title} amount={item.amount} perDuration={item.perDuration} _id={item._id} key={i} location={item.location} image={item.image} exactLocation={item.exactLocation}/>
        })}

        {data && filter === "rating" && filterData(data).sort((a,b)=>  Number(a["rating"])-Number(b["rating"])).reverse().map((item, i)=>{
            return     <ResultCard title={item.title} amount={item.amount} perDuration={item.perDuration} _id={item._id} key={i} location={item.location} image={item.image} exactLocation={item.exactLocation}/>
        })}

        {data && data?.length < 1 && <p className="no-data">sorry we don't have a daycare for the specified search term, try search  with different keywords</p>}

        {isLoading  &&  <p className="loader"></p>}

        {isFilterClicked && <Modal ismodalopen={JSON.stringify(isLoading)}>
            <Filter setFiltered={setFiltered}  setFilter={setFilter} setIsFilterClicked={setIsFilterClicked} />
            </Modal>}
        </div>
 
        <div className="result-footer">
        <Outlet />
        </div>
        </ResultWrapper>
    )
}

export default Result


