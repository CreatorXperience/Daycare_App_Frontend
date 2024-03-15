type TCreatedChatResponse = {
    memebers: [string, string], 
    _id: string,
    createdAt: string,
    message: string
    }

    type TPrompt  = {
        message: string,
       handleChatClick: (value: boolean) => void,
       id?: string
    }

    export type {TCreatedChatResponse, TPrompt}