import {createContext, useMemo, useState} from "react";
import { Outlet} from "react-router-dom";
import useResizeObeserver from "./hooks/useResizeObserver";
import useIsCompatible from "./hooks/useIsCompatible";
import AppWrapper from "./AppWrapper";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { TChatContext, TOnlineUsers, TUserContext, TUserLoginContext } from "./type";
import useIsUserRegistered from "./hooks/useIsUserRegistered";
import Modal from "../components/Modal";
import { TCreatedChatResponse } from "../components/Prompt/types";
import {Socket} from "socket.io-client"
import { TMessage } from "../pages/Messages/type";
import useSocket from "./hooks/useSocket";



export  const UserContext = createContext<TUserContext | null>(null)
export const UserLoginContext = createContext<TUserLoginContext | null>(null)
export const ChatContext  = createContext<null | TChatContext>(null)
export const OnlineUsersContext =  createContext<TOnlineUsers | null>(null)
export const SocketContext = createContext<Socket | null>(null)
export const MessageContext = createContext<TMessageContext | null>(null)


type TMessageContext = {
  messages: TMessage[] | undefined,
  setMesssages: React.Dispatch<React.SetStateAction<TMessage[] | undefined>>
}

let client = new QueryClient()

function App() {
const [path] = useState<string>(window.location.pathname)
const {setIsCompatible,isCompatibleMemo} = useIsCompatible(path)
const {screenRef} =  useResizeObeserver(setIsCompatible)
const {UserContextValue,userLoginContextValue, isModalOpen,setIsModalOpen,setLastSearch,setSeen,setUserInfo} =  useIsUserRegistered(isCompatibleMemo)
const [chat, setChat] = useState<TCreatedChatResponse | undefined>()
const {messages,onLineUsers,setMesssages,socket} =  useSocket()
const chatMemo = useMemo(()=>{
  return chat
  },[chat])

 


console.log(onLineUsers)

  return (
    <QueryClientProvider client= {client}>
    <UserContext.Provider value={{...UserContextValue,setIsModalOpen,setLastSearch,setSeen,setUserInfo}}>
      <UserLoginContext.Provider value={userLoginContextValue}>
      <ChatContext.Provider value={{userChat: chatMemo, updateUserChat: setChat}}>
        <SocketContext.Provider value={socket}>
          <MessageContext.Provider value={{messages, setMesssages}}>
      <OnlineUsersContext.Provider value={onLineUsers}>
    <AppWrapper ismodalopen={JSON.stringify(isModalOpen)}>
    <div className="App" ref={screenRef}>
      { isModalOpen &&  <Modal ismodalopen={JSON.stringify(isModalOpen)}>
        <div className="loader-container">
        <span className="loader"></span>
        </div>
        </Modal>}
    <Outlet />
    </div>
    </AppWrapper>
        </OnlineUsersContext.Provider>
          </MessageContext.Provider>
        </SocketContext.Provider>
      </ChatContext.Provider>
      </UserLoginContext.Provider>
    </UserContext.Provider>
    </QueryClientProvider> 
  );
}

export default App;


