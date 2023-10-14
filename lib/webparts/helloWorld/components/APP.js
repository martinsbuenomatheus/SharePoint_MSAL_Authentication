import * as React from "react";
import { useMsal } from "@azure/msal-react";
import { Api } from "./API";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
function App() {
    var instance = useMsal().instance;
    var _a = React.useState(''), userName = _a[0], setUserName = _a[1];
    React.useEffect(function () {
        var currentAccount = instance.getActiveAccount();
        console.log("currentAccount:", currentAccount);
        if (currentAccount) {
            setUserName(currentAccount.username);
        }
    }, [instance]);
    return (React.createElement("div", null,
        React.createElement("section", { className: "section" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "columns is-centered" },
                    React.createElement("div", { className: "column is-half" },
                        React.createElement(SignInButton, null),
                        React.createElement(Api, null),
                        React.createElement(SignOutButton, null)))))));
}
export default App;
//# sourceMappingURL=APP.js.map