import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import useSearchDayCares from "./useSearchDaycare"
import useLastSearch from "../../Search/hooks/useLastSearch"

const useSearch  = ()=>{

    let [search, setSearchParams] = useSearchParams()
    let {data, setTerm, isLoading, setData} = useSearchDayCares()
    const [input, setInput] = useState<string>()
    let [filter, setFilter] = useState("amount")
    let [isFilterClicked, setIsFilterClicked]= useState<boolean>(false)
    const {handleLastSearch} = useLastSearch()

    useEffect(()=>{
        if(search.get("term")){
            setTerm(search.get("term") as string)
        }
    }, [search])

    const onSearchTermChanged = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(input){
            setSearchParams({term: input})
            handleLastSearch(input)
        }
    }

    const handleInput = (e:  React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    return {onSearchTermChanged, handleInput, filter,setFilter,data,input,isLoading, isFilterClicked,setIsFilterClicked,setData}
}

export default useSearch