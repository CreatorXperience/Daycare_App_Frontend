
import {createContext, useMemo, useState} from "react";
import { Outlet} from "react-router-dom";

import useResizeObeserver from "./hooks/useResizeObserver";
import useIsCompatible from "./hooks/useIsCompatible";
import AppWrapper from "./AppWrapper";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { TChatContext, TChatNotification, TMessageContext, TOnlineUsers, TUserContext, TUserLoginContext } from "./type";
import useIsUserRegistered from "./hooks/useIsUserRegistered";

import { TCreatedChatResponse } from "../components/Prompt/types";
import {Socket} from "socket.io-client"

import useSocket from "./hooks/useSocket";



export  const UserContext = createContext<TUserContext | null>(null)
export const UserLoginContext = createContext<TUserLoginContext | null>(null)
export const ChatContext  = createContext<null | TChatContext>(null)
export const OnlineUsersContext =  createContext<TOnlineUsers[] | null>(null)
export const SocketContext = createContext<Socket | null>(null)
export const MessageContext = createContext<TMessageContext | null>(null)
export const NotificationContext = createContext<TChatNotification | null>(null)


let client = new QueryClient();

function App() {
const [path] = useState<string>(window.location.pathname)
const {setIsCompatible,isCompatibleMemo} = useIsCompatible(path)
const {screenRef} =  useResizeObeserver(setIsCompatible)
const {UserContextValue,userLoginContextValue, isModalOpen,setIsModalOpen,setLastSearch,setSeen,setUserInfo,setUserLoginInfo} =  useIsUserRegistered(isCompatibleMemo)
const [chat, setChat] = useState<TCreatedChatResponse | undefined>()
const {messages,onLineUsers,setMesssages,socket, notification, setNotification} =  useSocket()
const chatMemo = useMemo(()=>{
  return chat
  },[chat])


  
 


  return (
    <QueryClientProvider client= {client}>
    <UserContext.Provider value={{...UserContextValue,setIsModalOpen,setLastSearch,setSeen,setUserInfo}}>
      <UserLoginContext.Provider value={{...userLoginContextValue, setUserLoginInfo}}>
      <ChatContext.Provider value={{userChat: chatMemo, updateUserChat: setChat}}>
        <SocketContext.Provider value={socket}>
          <MessageContext.Provider value={{messages, setMesssages}}>
      <OnlineUsersContext.Provider value={onLineUsers}>
      <NotificationContext.Provider value={{notification: notification, setNotification: setNotification}}>
    <AppWrapper ismodalopen={JSON.stringify(isModalOpen)}>
    <div className="App" ref={screenRef}>
    <Outlet />
    </div>
    </AppWrapper>
        </NotificationContext.Provider>
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
