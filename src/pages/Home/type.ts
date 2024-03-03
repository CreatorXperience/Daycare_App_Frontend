type TChildCare = {
    _id: string, 
    title: string,
    amount: number,
    perDuration: string,
    rating: 5,
    image: string,
    isOpen: boolean,
    location: {type: string, _id: string, coordinates: string[]},
    owner: string,
    phonenumber: string,
    userId: string,
    description: string,
    isVerified: string,
    exactLocation: string
}



type TCoordinates = {
    long: number,
    lat: number
}

type TValue = {city: string, country: string}

type TCordinates = {longitude: number, latitude: number}

export type {TChildCare, TCoordinates, TValue,TCordinates}