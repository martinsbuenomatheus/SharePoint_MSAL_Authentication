import { useMsal } from "@azure/msal-react";
import { loginApiRequest } from "./authConfig";
import * as React from "react";
export var SignInButton = function () {
    var instance = useMsal().instance;
    var handleLogin = function () {
        instance.loginRedirect(loginApiRequest)
            .then(function (result) { return console.log("Login result:", result); })
            .catch(function (e) {
            console.log("Login error:", e);
        });
    };
    return React.createElement("button", { onClick: handleLogin }, "Sign In");
};
//# sourceMappingURL=SignInButton.js.map