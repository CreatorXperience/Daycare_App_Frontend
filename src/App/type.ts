import { TLoginResponse } from "../pages/Auth/Login/type"
import { TResponse } from "../pages/Auth/Signup/type"

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

  export type {TUserContext,TUserLoginContext}