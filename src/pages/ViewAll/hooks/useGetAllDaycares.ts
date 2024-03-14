import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import useLastSearch from "../../Search/hooks/useLastSearch"
import { TChildCare } from "../../Home/type"
import { TFiltered } from "../../Result/type"
import useHomeLogic from "../../Home/hooks/useHandleDaycares"

const useGetAllDaycares = ()=>{
    const [filtered, setFiltered] = useState<TFiltered>({location:"", minp:0, maxp: 600})
    let [search, setSearchParams] = useSearchParams()
    const [input, setInput] = useState<string>("")
    let [filter, setFilter] = useState("amount")
    let [isFilterClicked, setIsFilterClicked]= useState<boolean>(false)
    const {handleLastSearch} = useLastSearch()
    const [,setTerm] = useState<string>()
    const {data,setLocation,isLoading} = useHomeLogic()


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


    return {
        onSearchTermChanged, 
        handleInput, 
        filter,
        setFilter,
        data,
        input,
        isLoading,
        isFilterClicked,
        setIsFilterClicked,
        setFiltered, 
        filterData,
        setLocation
    }
}

export default useGetAllDaycares