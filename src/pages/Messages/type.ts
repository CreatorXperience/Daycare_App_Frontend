type TChatPayload = {
    chatId: string,
    message: string,
    senderId: string
}

type TMessagePayload = {
    payload: TChatPayload, 
  token: string | undefined
}

export type {TChatPayload, TMessagePayload}