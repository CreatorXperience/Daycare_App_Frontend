import { TFiltered } from "../../../pages/Result/type"

const useCustomFilter = (setFiltered: React.Dispatch<React.SetStateAction<TFiltered>>,setIsFilterClicked: React.Dispatch<React.SetStateAction<boolean>>, )=>{
    
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        e.preventDefault()
        setFiltered((filter)=> {
            return {...filter,  location: e.target.value}
        })
    }
    
    
    const handleChangeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
    
        setFiltered((filter)=> {
            return {...filter,  maxp: +e.target.value}
        })
    
    }
    
    const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
    
        setFiltered((filter)=> {
            return {...filter,  minp: +e.target.value}
        })
    
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsFilterClicked(false)
    }
    return {handleSelect,handleChangeMaxPrice,handleChangeMinPrice, handleSubmit}
}

export default useCustomFilter