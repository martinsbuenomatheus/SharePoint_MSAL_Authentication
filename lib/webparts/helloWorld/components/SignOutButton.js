import { useMsal } from "@azure/msal-react";
import * as React from "react";
export var SignOutButton = function () {
    var instance = useMsal().instance;
    var handleLogout = function () {
        void instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        });
    };
    return React.createElement("button", { onClick: handleLogout }, "Sign Out");
};
//# sourceMappingURL=SignOutButton.js.map