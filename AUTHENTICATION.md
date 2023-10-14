# MSAL REACT AUTHENTICATION

## Architecture
* User logs in SharePoint (eg.: www.company.sharepoint.com)
* When the WebParts starts, it tries to acquire an Access Token from the API, through Azure App Registration
* This Access Token then is used to acquire the ID Token
* This ID Token is validated by the WebApp, once it recieves a request

## References
Many thanks to: [Mark Daniel Vincent](https://dnilvincent.com/blog/posts/reactjs-msal-with-aspnetcore-to-use-azure-ad-part3) and [Keith Babinec](https://keithbabinec.com/2020/09/27/oauth-2-0-authorization-code-flow-with-a-react-spa-asp-net-core-web-api-rbac-roles-and-msal/) for their blog posts.


## Implementation

### Required libs
Make sure those libs are compatible with the SPFx used (More on README.md)
> import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react"; </br>
> import { PublicClientApplication, EventType, AuthenticationResult } from "@azure/msal-browser";

### Config file (authConfig.tsx)
	
	export const msalConfig = {
	auth: {
	  clientId: "{clientID}", // Client ID from Azure App Registration
	  authority: 'https://login.microsoftonline.com/{tenantID}', // Azure Tenant ID
	  redirectUri: '/sites/hello-world/_layouts/15/workbench.aspx', // where to redirects back after sign in
	},
	cache: {
	  cacheLocation: "sessionStorage", // This configures where your cache will be stored
	  storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
	},
	// Those Logs are optional, fore debug purposes
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
	
	// Those scopes are created under "Expose an API" on Azure WebApps
	export const loginApiRequest = { 
		scopes: ["{clientID}/user_impersonation"],
	};

### Initialize the Public Client Application
> Initialize this fuction in the project root file</br>

	import { msalConfig, loginApiRequest } from "./authConfig";

	const pca = new PublicClientApplication(msalConfig);

	axios.interceptors.request.use(
	async (response) => {
		const account = pca.getAllAccounts()[0];
		const msalResponse = await pca.acquireTokenSilent({
		...loginApiRequest,
		account: account,
		})
		response.headers.common.Authorization = `Bearer ${ msalResponse.accessToken }`;
		return response;
		},
		(err) => {
			return Promise.reject(err);
		}
	);

### Initiate the MsalProvider
> The MsalProvider MUST encompass the entire solution </br>
	
	<MsalProvider instance={pca}>
		<APP />
	</MsalProvider>

### Sign In Button
> This function redirects to the Azure App Registration to obtain an AccessToken. In case of SSO, it won't asks for user/password. </br>

	export const SignInButton = () => {
	const { instance } = useMsal();

	const handleLogin = () => {
		instance.loginRedirect(loginApiRequest)
		.then((result))
		.catch((e) => {
		console.log("Login error:", e);
		});
	};
	return <button onClick={handleLogin}>Sign In</button>;
	};

### Sign out Button

	export const SignOutButton = () => {
	const { instance } = useMsal();

	const handleLogout = () => {
		void instance.logoutRedirect({
		postLogoutRedirectUri: "/",
		});
	};
	return <button onClick={handleLogout}>Sign Out</button>;
	};