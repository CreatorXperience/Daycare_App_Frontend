import { TChildCare } from "../Home/type"

type TChild = Omit<TChildCare, "location" | "isVerified" | "perDuration" >
type TExtendChildcare<T, K extends keyof  T> = Omit<T, K>

type TMessage = {
    message: string,
    id: string
}

export type {TExtendChildcare, TChild, TMessage} 