import { TFiltered } from "../../pages/Result/type"

type TFilter = {
    setFilter: React.Dispatch<React.SetStateAction<string>>
    setIsFilterClicked: React.Dispatch<React.SetStateAction<boolean>>
    setFiltered: React.Dispatch<React.SetStateAction<TFiltered>>

}


type TFilterPayload = {
    location: string,
    maxp: string,
    minp: string
}

type TDefault = {
    location: string
}

export  type {TFilter, TFilterPayload, TDefault}