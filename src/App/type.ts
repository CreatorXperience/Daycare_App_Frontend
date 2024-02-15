import { TResponse } from "../pages/Auth/Signup/hooks/type"

type TUserContext =  {
    setUserInfo: React.Dispatch<React.SetStateAction<TResponse | undefined>>
  }

  export type {TUserContext}