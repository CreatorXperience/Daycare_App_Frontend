import {createContext, useState} from "react";
import { Outlet} from "react-router-dom";
import useResizeObeserver from "./hooks/useResizeObserver";
import useIsCompatible from "./hooks/useIsCompatible";
import AppWrapper from "./AppWrapper";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { TUserContext } from "./type";
import useIsUserRegistered from "./hooks/useIsUserRegistered";



export  const UserContext = createContext<TUserContext | null>(null)

let client = new QueryClient()

function App() {
const [path] = useState<string>(window.location.pathname)
const {setIsCompatible} = useIsCompatible(path)
const {screenRef} =  useResizeObeserver(setIsCompatible)
const {UserContextValue} =  useIsUserRegistered()

  return (
    <QueryClientProvider client= {client}>
    <UserContext.Provider value={UserContextValue}>
    <AppWrapper>
    <div className="App" ref={screenRef}>
      <Outlet />
    </div>
    </AppWrapper>
    </UserContext.Provider>
    </QueryClientProvider> 
  );
}

export default App;


