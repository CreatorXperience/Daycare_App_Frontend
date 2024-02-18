type TUserPayload  = {
    fullname: string,
    email: string,
    password: string
}

type TResponse = {
    message: {
        email: string,
         fullname: string,
         _id: string,
         is_verified: boolean
    },
    status: string,
    _id: string;
}
export type {TUserPayload,TResponse}