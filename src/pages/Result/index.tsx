import styled from "styled-components"
import { colors } from "../../constants/colors"
import Header from "../../components/Header"
import { GoBell, GoChevronLeft, GoSearch } from "react-icons/go"
import NameInput from "../../components/NameInput"
import FilterSlider from "../../components/Filterslider"
import { Outlet } from "react-router-dom"
import ResultCard from "../../components/ResultCard"

const Result = ()=>{
    
    return (
        <ResultWrapper>
        <div className="result-cont">
        <Header title="Result">
            <GoChevronLeft size="30px" />
            <GoBell size="25px" />
            </Header>
            <form onSubmit={(e)=> ""}>

        <NameInput label="" 
        placeholder="search by name or location" 
        onChangeHandler={(e)=>  ""}
        borderradius="15px"
        value={"searchTerm"}
        >
         <GoSearch className="eye" color={`${colors.primary.lightGray}`} fontSize="22px"/>
         </NameInput>
            </form>

            <FilterSlider />

            <ResultCard />

            <ResultCard />
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
   border: 1px solid red;
   position: relative;

   .result-cont {
    width: 98%;
    height: 80%;

        display: flex;
        flex-flow: column;
        overflow-y: auto;
   }

   .result-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
   }
`