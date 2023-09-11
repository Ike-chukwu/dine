import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [searchedFood, setSearchedFood] = useState();
  const [searchedResultLoading, setSearchedResult] = useState(false);

  return (
    <AuthContext.Provider value={{ searchedFood, setSearchedFood }}>
      {children}
    </AuthContext.Provider>
  );
};
