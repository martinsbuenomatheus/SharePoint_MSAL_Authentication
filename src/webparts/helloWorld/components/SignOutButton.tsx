import { useMsal } from "@azure/msal-react";
import * as React from "react";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    void instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };
  return <button onClick={handleLogout}>Sign Out</button>;
};
