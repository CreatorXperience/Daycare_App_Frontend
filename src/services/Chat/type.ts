type TChatPayload = {
    id: string,
    setErrorResponse: React.Dispatch<React.SetStateAction<undefined>>
}

type TChats = {
    chat: {
        createdAt: string,
        updatedAt: string,
        members: [string, string], 
        _id: string
    }[]
}

export type {TChatPayload,TChats}