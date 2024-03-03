type TLocation = {
    setLocation: React.Dispatch<React.SetStateAction<string | undefined>>,
    setIsCoordinatesLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type TState = {
    city: string,
    country: string
    }

export type {TLocation, TState}