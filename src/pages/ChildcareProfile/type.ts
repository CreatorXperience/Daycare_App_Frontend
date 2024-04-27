import { TChildCare } from "../Home/type"

type TChild = Omit<TChildCare, "location" | "isVerified" | "perDuration" | "owner" >
type TExtendChildcare<T, K extends keyof  T> = Omit<T, K>

type TMessage = {
    message: string,
    id: string
}

type Tupload = |{
    endpoint: string
}
export type {TExtendChildcare, TChild, TMessage, Tupload} 