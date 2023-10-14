export declare let USER_TOKEN: string;
export declare const msalConfig: {
    auth: {
        clientId: string;
        authority: string;
        redirectUri: string;
    };
    cache: {
        cacheLocation: string;
        storeAuthStateInCookie: boolean;
    };
    system: {
        loggerOptions: {
            loggerCallback: (level: any, message: string, containsPii: any) => void;
        };
    };
};
export declare const loginApiRequest: {
    scopes: string[];
};
export declare const setToken: (valor: string) => void;
//# sourceMappingURL=authConfig.d.ts.map