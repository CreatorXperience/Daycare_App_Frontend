import { TCreatedChatResponse } from "../components/Prompt/types"
import { TLoginResponse } from "../pages/Auth/Login/type"
import { TResponse } from "../pages/Auth/Signup/type"
import { TMessage } from "../pages/Messages/type";

type TUserContext =  {
    setUserInfo: React.Dispatch<React.SetStateAction<TResponse | undefined>>,
    userInfo: TResponse | undefined,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isModalOpen: boolean,
    setSeen: React.Dispatch<React.SetStateAction<string[] | undefined>>,
    seen: string[] | undefined,
    search: string[] | undefined,
    setLastSearch: React.Dispatch<React.SetStateAction<string[] | undefined>>
  }

  type TUserLoginContext  = {
    userLoginInfo: TLoginResponse | undefined,
    setUserLoginInfo: React.Dispatch<React.SetStateAction<TLoginResponse | undefined>>
  }

  type TChatContext = {
    userChat:TCreatedChatResponse | undefined,
    updateUserChat: React.Dispatch<React.SetStateAction<TCreatedChatResponse | undefined>>
    }


type TOnlineUsers = {
  userId: string,
  socketId: string
}


type TMessageContext = {
  messages: TMessage[] | undefined,
  setMesssages: React.Dispatch<React.SetStateAction<TMessage[] | undefined | []>>
}

type TChatNotification = {
  notification?: {chatId: string,message: string}[],
  setNotification: React.Dispatch<React.SetStateAction<{chatId: string,message: string}[]>>
}
  export type {TUserContext,TUserLoginContext,TChatContext, TOnlineUsers, TMessageContext, TChatNotification}