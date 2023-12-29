import { createContext } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  let user = null;
  let ContextData = {
    user: user,
  };
  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};
