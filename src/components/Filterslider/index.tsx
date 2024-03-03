import { GoFilter } from "react-icons/go"
import styled from "styled-components"
import { colors } from "../../constants/colors"



type TFilter = {
    setFilter: React.Dispatch<React.SetStateAction<string>>,
    setIsFilterClicked: React.Dispatch<React.SetStateAction<boolean>>
}
const FilterSlider = ({setFilter, setIsFilterClicked}: TFilter)=>{


    const handleClick = (term: string)=>{
        setFilter(term)
    }
return (
    <FilterSliderWrapper>
        <div className="filter-cont">
        <button className="filter" onClick={()=> setIsFilterClicked(true)}><GoFilter /> <span>Filter</span></button>
        <button className="normal" onClick={()=> handleClick("rating")}><span>Rating</span></button>
        <button className="normal"  onClick={()=> handleClick("amount")}><span>Amount</span></button>
        </div>
    </FilterSliderWrapper>
)
}

export default FilterSlider

const FilterSliderWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .filter-cont{
        width: 90%;
        height: auto;
        overflow-x: auto;
        display: flex;


        .filter, .normal , .normal_sec{
            padding: 8px;
            width: 120px;
            border-radius: 10px;
            border: none;
            font-size: 16px;
            font-weight: 800;
            flex-shrink: 0;
        }

        .filter {
            background: linear-gradient(180deg, #72B5F1 0%, rgba(23, 118, 202, 0.83) 131.58%);
            color: ${colors.primary.white}
        }

        button {
            margin: 3px;
        }

        .normal {
            color: ${colors.primary.cyan};
            background-color: ${colors.primary.grayishWhite};
        }

          .normal_sec {
            color: ${colors.primary.cyan};
            background-color: ${colors.primary.grayishWhite};
        }
    }
`