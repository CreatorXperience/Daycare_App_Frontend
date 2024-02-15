import { TLoginResponse } from "../pages/Auth/Login/type"
import { TResponse } from "../pages/Auth/Signup/hooks/type"

type TUserContext =  {
    setUserInfo: React.Dispatch<React.SetStateAction<TResponse | undefined>>,
    userInfo: TResponse | undefined
  }

  type TUserLoginContext  = {
    userLoginInfo: TLoginResponse | undefined,
    setUserLoginInfo: React.Dispatch<React.SetStateAction<TLoginResponse | undefined>>
  }

  export type {TUserContext,TUserLoginContext}