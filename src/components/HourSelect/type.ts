import { ReactNode } from "react"

type THourProp = {
    disabled?: boolean,
    userClosingHour?: number,
    userOpeningHour?:number,
    children?: ReactNode,
    onTimeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    size?: string
}

export type {THourProp}