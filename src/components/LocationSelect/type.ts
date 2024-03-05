import { ReactNode } from "react"
import { TChildCare } from "../../pages/Home/type";

type TSelect = {
    handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
    disabled?: boolean,
    value?:string,
    children?: ReactNode,
}

export type {TSelect}