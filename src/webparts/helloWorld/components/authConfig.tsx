import { LogLevel } from "@azure/msal-browser";

export let USER_TOKEN = "";

export const msalConfig = {
    auth: {
      clientId: "{clientID}",
      authority: 'https://login.microsoftonline.com/{tenantID}', // Tenant ID of the React.JS App Registration
      redirectUri: '/sites/hello-world/_layouts/15/workbench.aspx',
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
      loggerOptions: {
        loggerCallback: (level: any, message: string, containsPii: any) => {
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
export const loginApiRequest = {
  scopes: ["{clientID}/user_impersonation"],
};

export const setToken = (valor: string) => {
  debugger
    USER_TOKEN = valor;
    return;
}
