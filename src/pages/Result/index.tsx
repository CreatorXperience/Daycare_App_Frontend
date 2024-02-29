import styled from "styled-components"
import { colors } from "../../constants/colors"
import Header from "../../components/Header"
import { GoBell, GoChevronLeft, GoSearch } from "react-icons/go"
import NameInput from "../../components/NameInput"
import FilterSlider from "../../components/Filterslider"
import { Outlet, } from "react-router-dom"
import ResultCard from "../../components/ResultCard"

import useSearch from "./hooks/useSearch"
import Modal from "../../components/Modal"


const Result = ()=>{

    const {data,filter,handleInput,onSearchTermChanged,setFilter, input,isLoading, setIsFilterClicked,isFilterClicked} = useSearch()
        
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

        {data && filter === "amount" && data.sort((a,b)=>  Number(a["amount"])-Number(b["amount"])).reverse().map((item, i)=>{
            return     <ResultCard title={item.title} amount={item.amount} perDuration={item.perDuration} _id={item._id} key={i} location={item.location}/>
        })}

        {data && filter === "rating" && data.sort((a,b)=>  Number(a["rating"])-Number(b["rating"])).reverse().map((item, i)=>{
            return     <ResultCard title={item.title} amount={item.amount} perDuration={item.perDuration} _id={item._id} key={i} location={item.location}/>
        })}

        {isLoading &&  <p className="loader"></p>}

        {isFilterClicked && <Modal ismodalopen={JSON.stringify(isLoading)}>
            <div className="filter-container">
                <div className="overlay"></div>
        <div className="main-container"></div>
            </div>
            </Modal>}
        
        </div>
 
        <div className="result-footer">
        <Outlet />
        </div>
        </ResultWrapper>
    )
}

export default Result


const ResultWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
   background-color: ${colors.primary.white};
   position: relative;

   .result-cont {
    width: 98%;
    height: 90%;
    display: flex;
    flex-flow: column;
    overflow-y: auto;

    



     .loader {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite;
        position: relative;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%
      }
      .loader::before , .loader::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid   ${colors.primary.cyan};
        animation: prixClipFix 2s linear infinite ;
      }
      .loader::after{
        border-color: #FF3D00;
        animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
        inset: 6px;
      }

      @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
      }

      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      
   }
}

   .result-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
   }
`