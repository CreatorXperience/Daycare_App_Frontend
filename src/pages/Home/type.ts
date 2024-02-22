type TChildCare = {
    _id: string, 
    title: string,
    amount: string,
    perDuration: string,
    rating: 5,
    image: string,
    isOpen: boolean,
    location: {type: string, _id: string, coordinates: string[]},
    owner: string,
    phoneNumber: string,
    userId: string
}



type TCoordinates = {
    long: number,
    lat: number
}

export type {TChildCare, TCoordinates}