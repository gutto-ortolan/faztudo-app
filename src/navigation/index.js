import React from "react";
import { AuthProvider } from "./AuthProvider";
import Rotas from "./Rotas";

const Providers = () => {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
};

export default Providers;
