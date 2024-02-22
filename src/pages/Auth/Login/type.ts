type TLoginResponse = {
    message: {
        day_care_owner: boolean,
        favorite: [],
        isVerified: boolean,
        _id: string,
        token: string
    },
    status: string,
    token: string
}

export type {TLoginResponse}