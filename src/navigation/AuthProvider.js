import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [errorCadastro, setErrorCadastro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uuid, setUuid] = useState(null);
  const [usuario, setUsuario] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
