import { ReactNode, createContext, useContext } from "react";
import { AuthContextType } from "../types/auht";
import { sayHelloRequest } from "../api/auth";

const authContext = createContext<AuthContextType | null >(null);

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export default function AuthProvider({ children } : { children: ReactNode }) {

  const sayHello = async () => {
    const res = await sayHelloRequest()
    return res
  }

  return (
    <authContext.Provider
      value={{
        sayHello
      }}
    >
      {children}
    </authContext.Provider>
  );
}