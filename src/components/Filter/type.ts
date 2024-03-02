import { TChildCare } from "../../pages/Home/type"
import { TFiltered } from "../../pages/Result/type"

type TFilter = {
    setFilter: React.Dispatch<React.SetStateAction<string>>
    setIsFilterClicked: React.Dispatch<React.SetStateAction<boolean>>,
    setIsFilterLoading: React.Dispatch<React.SetStateAction<boolean>>,
    data: TChildCare[] | undefined,
    setFiltered: React.Dispatch<React.SetStateAction<TFiltered>>

}

export  type {TFilter}