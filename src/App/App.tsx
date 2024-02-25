import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import useResizeObeserver from "./hooks/useResizeObserver";
import useIsCompatible from "./hooks/useIsCompatible";
import AppWrapper from "./AppWrapper";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { TUserContext, TUserLoginContext } from "./type";
import useIsUserRegistered from "./hooks/useIsUserRegistered";
import Modal from "../components/Modal";
import UserInputData from "../pages/UserInputData";

export const UserContext = createContext<TUserContext | null>(null);
export const UserLoginContext = createContext<TUserLoginContext | null>(null);

let client = new QueryClient();

function App() {
  const [path] = useState<string>(window.location.pathname);
  const { setIsCompatible, isCompatibleMemo } = useIsCompatible(path);
  const { screenRef } = useResizeObeserver(setIsCompatible);
  const { UserContextValue, userLoginContextValue, isModalOpen } =
    useIsUserRegistered(isCompatibleMemo);

  return (
    <QueryClientProvider client={client}>
      <UserContext.Provider value={UserContextValue}>
        <UserLoginContext.Provider value={userLoginContextValue}>
          <AppWrapper>
            <UserInputData />
            {isModalOpen && (
              <Modal>
                <div> </div>
              </Modal>
            )}
            <div className="App" ref={screenRef}>
              <Outlet />
            </div>
          </AppWrapper>
        </UserLoginContext.Provider>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
