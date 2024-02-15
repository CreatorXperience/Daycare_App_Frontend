import {createContext, useMemo, useState} from "react";
import { Outlet} from "react-router-dom";
import useResizeObeserver from "./hooks/useResizeObserver";
import useIsCompatible from "./hooks/useIsCompatible";
import AppWrapper from "./AppWrapper";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";

export  const AppContext = createContext<{} | null>(null)

let client = new QueryClient()
function App() {
const [path] = useState<string>(window.location.pathname)
const {setIsCompatible} = useIsCompatible(path)
const {screenRef} =  useResizeObeserver(setIsCompatible)

const AppContextValue =  useMemo(()=>{
return {}
}, [])

  return (
    <QueryClientProvider client= {client}>
    <AppContext.Provider value={AppContextValue}>
    <AppWrapper>
    <div className="App" ref={screenRef}>
      <Outlet />
    </div>
    </AppWrapper>
    </AppContext.Provider>
    </QueryClientProvider> 
  );
}

export default App;


