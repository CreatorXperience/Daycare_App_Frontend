import { useContext, useState } from "react"
import useLastSearch from "./hooks/useLastSearch"
import { UserContext } from "../../App/App"

const useSearch = ()=>{
    const {handleLastSearch} = useLastSearch()
    const [searchTerm, setSearchTerm] = useState<string>()
    const user = useContext(UserContext)

    const onSearch = ( e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if(searchTerm){
            handleLastSearch(searchTerm as string)
            setSearchTerm("")
        }
    }

    const onInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setSearchTerm(e.target.value)
    }


    const handleClearAll = ()=>{
        user?.setLastSearch([])
        localStorage.setItem("lastSearch", JSON.stringify([]))
    }

    return {
        onSearch,
        handleClearAll,
        onInput,
        searchTerm
    }
}

export default useSearch