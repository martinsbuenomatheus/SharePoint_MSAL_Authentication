import { useMsal } from "@azure/msal-react";
import { loginApiRequest } from "./authConfig";
import * as React from "react";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginApiRequest)
    .then((result) => console.log("Login result:", result))
    .catch((e) => {
      console.log("Login error:", e);
    });
  };
  return <button onClick={handleLogin}>Sign In</button>;
};
