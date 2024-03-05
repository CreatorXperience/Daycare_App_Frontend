import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import useSearchDayCares from "./useSearchDaycare"
import useLastSearch from "../../Search/hooks/useLastSearch"
import { TFiltered } from "../type"
import { TChildCare } from "../../Home/type"

const useSearch  = ()=>{
    const [filtered, setFiltered] = useState<TFiltered>({location:"", minp:0, maxp: 600})
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
            setFiltered({location: '', minp:0, maxp: 600})
            handleLastSearch(input)
        }
    }

    const handleInput = (e:  React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    let filterData = (data: TChildCare[])=>{
        let  filt =  data.filter((item)=> +item.amount <= filtered.maxp)
        .filter((item)=> +item.amount >= filtered.minp)

        if(filtered.location !== ""){
           return filt.filter((item)=> item.exactLocation.toLowerCase() === filtered.location.toLowerCase())
        }
        return filt
    }


    return {onSearchTermChanged, handleInput, filter,setFilter,data,input,isLoading, isFilterClicked,setIsFilterClicked,setFiltered, filterData}
}

export default useSearch