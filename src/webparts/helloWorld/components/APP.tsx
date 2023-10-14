import * as React from "react";
import { useMsal } from "@azure/msal-react";
import { Api } from "./API";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

function App() {
  const {instance} = useMsal();
  const [userName, setUserName] = React.useState('');

  React.useEffect(() =>{
        const currentAccount = instance.getActiveAccount();
        console.log("currentAccount:", currentAccount )

        if(currentAccount){
          setUserName(currentAccount.username);
        }
      }, [instance]);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <SignInButton />
              <Api />
              <SignOutButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
