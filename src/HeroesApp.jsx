import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContex";
import { authReducer } from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("heroUser")) || {
      logged: false,
    }
  );
};

const HeroesApp = () => {
  const [ heroUser, dispatch ] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('heroUser', JSON.stringify(heroUser))
  }, [heroUser])

  return (
    <AuthContext.Provider value={{ heroUser, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
