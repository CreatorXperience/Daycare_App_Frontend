import { Outlet, useNavigate } from "react-router-dom"
import { GoChevronLeft, GoKebabHorizontal, GoSearch } from "react-icons/go"
import { colors } from "../../constants/colors"
import Header from "../../components/Header"
import NameInput from "../../components/NameInput"
import FilterSlider from "../../components/Filterslider"
import ResultCard from "../../components/ResultCard"
import Modal from "../../components/Modal"
import Filter from "../../components/Filter"
import useGetAllDaycares from "./hooks/useGetAllDaycares"
import { useMemo } from "react"
import { TChildCare } from "../Home/type"
import ViewAllWrapper from "./ViewAllWrapper"


const ViewAll = ()=>{

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
    } = useGetAllDaycares()

    const navigate = useNavigate()
  
    const responseMemo = useMemo(()=> {
        return data && data.map((item)=> {
            if((input && input.toLowerCase() && item.title.toLowerCase().includes(input.toLowerCase() as string)) ||  input.toLowerCase()  === ""){
                return   item
            }
            return ""
        }).filter((item)=> item !== "") as TChildCare[]
    },[data, input])
    
    return (
        <ViewAllWrapper>
                 <Header title="All Childcare">
            <GoChevronLeft size="30px" onClick={()=> navigate("/home")} />
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

        <div className="result-cont">

        {responseMemo && filter === "amount" && filterData(responseMemo).sort((a,b)=>  Number(a["amount"])-Number(b["amount"])).reverse().map((item, i)=>{
            return     <ResultCard title={item.title} amount={item.amount} perDuration={item.perDuration} _id={item._id} key={i} location={item.location} image={item.image}  exactLocation={item.exactLocation}/>
        })}

        {responseMemo && filter === "rating" && filterData(responseMemo).sort((a,b)=>  Number(a["rating"])-Number(b["rating"])).reverse().map((item, i)=>{
            return     <ResultCard title={item.title} amount={item.amount} perDuration={item.perDuration} _id={item._id} key={i} location={item.location} image={item.image} exactLocation={item.exactLocation}/>
        })}

        {responseMemo && responseMemo?.length < 1 && <p className="no-data">sorry we don't have a daycare for the specified search term, try search  with different keywords</p>}


        {isFilterClicked && <Modal ismodalopen={JSON.stringify(isLoading)}>
            <Filter setFiltered={setFiltered}  setFilter={setFilter} setIsFilterClicked={setIsFilterClicked} />
            </Modal>}
           

        <div className="result-footer">
        <Outlet />
        </div>
        </div>

        </ViewAllWrapper>
    )
}

export default ViewAll


