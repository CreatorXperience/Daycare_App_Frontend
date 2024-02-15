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
    },
    status: string
}
export type {TUserPayload,TResponse}