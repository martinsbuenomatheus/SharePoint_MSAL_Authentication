import { LogLevel } from "@azure/msal-browser";
export var USER_TOKEN = "";
export var msalConfig = {
    auth: {
        //clientId: "fa4d2a4b-4e51-4d35-94bf-9f5de2537121", // cvv-api-stg-reg
        clientId: "72f15d2f-d079-4792-869b-0b2a2819bcfe",
        authority: 'https://login.microsoftonline.com/7575b092-fc5f-4f6c-b7a5-9e9ef7aca80d',
        redirectUri: '/sites/cvv/_layouts/15/workbench.aspx',
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: function (level, message, containsPii) {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
        },
    },
};
// Can be found in the API Permissions of the ASP.NET Web API
export var loginApiRequest = {
    //scopes: ["fa4d2a4b-4e51-4d35-94bf-9f5de2537121/user_impersonation"],
    scopes: ["72f15d2f-d079-4792-869b-0b2a2819bcfe/user_impersonation"],
};
export var setToken = function (valor) {
    debugger;
    USER_TOKEN = valor;
    return;
};
//# sourceMappingURL=authConfig.js.map