type TLoginResponse = {
    message: {
        day_care_owner: boolean,
        favorite: [],
        is_verified: boolean,
        _id: string,
        token: string,
        email: string
    },
    status: string,
    token: string
}

export type {TLoginResponse}