type TRegisterPayload = {
    daycareId: string,
    token?: string,
    setErrorResponse: React.Dispatch<React.SetStateAction<undefined>>
    }


    type TIsRegisterPayload = {
        id?: string,
        token?: string
    }
    
    type TRegisteredPayload = {
        _id: string,
        registered: [string, string]
    }
    export type {TRegisterPayload,TRegisteredPayload,TIsRegisterPayload}