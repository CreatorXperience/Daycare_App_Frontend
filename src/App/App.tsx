import {createContext, useMemo, useState} from "react";
import { Outlet} from "react-router-dom";
import useResizeObeserver from "./hooks/useResizeObserver";
import useIsCompatible from "./hooks/useIsCompatible";
import AppWrapper from "./AppWrapper";

export  const AppContext = createContext<{} | null>(null)

function App() {
const [path] = useState<string>(window.location.pathname)
const {setIsCompatible} = useIsCompatible(path)
const {screenRef} =  useResizeObeserver(setIsCompatible)

const AppContextValue =  useMemo(()=>{
return {}
}, [])

  return (
    <AppContext.Provider value={AppContextValue}>
    <AppWrapper>
    <div className="App" ref={screenRef}>
      <Outlet />
    </div>
    </AppWrapper>
    </AppContext.Provider>
  );
}

export default App;


