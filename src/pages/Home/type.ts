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
    isVerified: string
}



type TCoordinates = {
    long: number,
    lat: number
}

export type {TChildCare, TCoordinates}