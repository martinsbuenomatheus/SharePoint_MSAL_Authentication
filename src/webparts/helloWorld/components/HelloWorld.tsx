import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios'

// Required for Authentication
import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { PublicClientApplication, EventType, AuthenticationResult } from "@azure/msal-browser";
import { msalConfig, loginApiRequest } from "./authConfig";
import APP from "./APP";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {

    //#region Authentication
    const pca = new PublicClientApplication(msalConfig);

    axios.interceptors.request.use(
      async (response) => {
        console.log("response:", response)
        const account = pca.getAllAccounts()[0];
        const msalResponse = await pca.acquireTokenSilent({
          ...loginApiRequest,
          account: account,
        })

        // console.log("Token Microsoft: ", msalResponse.accessToken)
        axios.defaults.headers.common = {'Authorization': `Bearer ${msalResponse.accessToken}`}
        return response;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    //#endregion

    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <MsalProvider instance={pca}>
            <APP />
          </MsalProvider>
        </div>
      </div>
    );
  }
}
