type TChildCare = {
    _id: string, 
    title: string,
    amount: string,
    perDuration: string,
    rating: number,
    image: string,
    isOpen: boolean,
    location: {type: string, _id: string, coordinates: string[]},
    owner: string,
    phonenumber: string,
    userId: string,
    description: string,
    isVerified: boolean,
    exactLocation: string,
    from: string,
    to: string,
    role: string,
    __v?: string 
}



type TCoordinates = {
    long: number,
    lat: number
}

type TValue = {city: string, country: string}

type TCordinates = {longitude: number, latitude: number}

export type {TChildCare, TCoordinates, TValue,TCordinates}