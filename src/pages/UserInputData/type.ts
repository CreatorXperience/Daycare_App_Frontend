import { TChildCare } from "../Home/type"

type TChild = Omit<TChildCare, "location" | "isVerified" | "perDuration" >
type TExtendChildcare<T, K extends keyof  T> = Omit<T, K>

export type {TExtendChildcare, TChild} 