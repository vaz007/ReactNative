import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContex";

export default function SplashScreen() {
  const { tryLocalSignIn } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignIn();
  });

  return null;
}
