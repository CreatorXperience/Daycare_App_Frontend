import NameInput from "../../components/NameInput"
import { GoChevronLeft, GoKebabHorizontal,  GoSearch } from "react-icons/go"
import { colors } from "../../constants/colors"
import Header from "../../components/Header"
import LastSeen from "../../components/Lastseen"
import Recent from "../../components/Recent"
import useGetLastSeen from "./hooks/useGetLastSeenDayCares"
import useSearch from "./hooks/useSearch"
import SearchWrapper from "./SearchWrapper"

const Search = ()=>{
    const {resultMemo} = useGetLastSeen()
    const {onSearch,handleClearAll,onInput, searchTerm} = useSearch()


    return (
        <SearchWrapper>
        <div className="input-cont">
        <Header title="Search">
            <GoChevronLeft size="30px" />
            <GoKebabHorizontal size="30px" />
            </Header>
            <form onSubmit={(e)=> onSearch(e)}>

        <NameInput
        type="text"
         label="" 
        placeholder="search by name or location" 
        onChangeHandler={(e)=>  onInput(e)}
        borderradius="15px"
        value={searchTerm}
        >
         <GoSearch className="eye" color={`${colors.primary.lightGray}`} fontSize="22px"/>
         </NameInput>
            </form>

         <p className="seen-title">Last Seen</p>
         <LastSeen data={resultMemo} />

         <div className="last-search-cont">
         <p className="seen-title">Last Search</p>
         <p className="clear" onClick={()=> handleClearAll()}>Clear all</p>
         </div>

         <Recent />
        </div>
        </SearchWrapper>
    )
}

export default Search


