import  {createPortal} from "react-dom"

const SearchModal = ()=>{
    return createPortal(<div> </div>, document.getElementById("search-cont") as Element)
}

export default SearchModal