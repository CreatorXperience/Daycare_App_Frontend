type TChatPayload = {
    chatId: string,
    message: string,
    senderId: string
}

type TMessagePayload = {
    payload: TChatPayload, 
  token: string | undefined
}

type TMessage = {
  _id: string,
  message: string,
  senderId: string,
  chatId: string
}

export type {TChatPayload, TMessagePayload, TMessage}