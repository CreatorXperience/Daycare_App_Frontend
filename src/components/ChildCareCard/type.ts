import { TChildCare, TCoordinates } from "../../pages/Home/type"

type TChildCardProps = {
    data?: TChildCare[],
    coordinates: TCoordinates | undefined
}

export type {TChildCardProps}