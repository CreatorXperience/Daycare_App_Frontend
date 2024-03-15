import { ReactNode } from "react"

type TScreenprop = {
    handleNext: () => void,
   start: string,
   end: string
    desc: string,
    keyword: string,
    icons: ReactNode,
    button: string
}

export type {TScreenprop}