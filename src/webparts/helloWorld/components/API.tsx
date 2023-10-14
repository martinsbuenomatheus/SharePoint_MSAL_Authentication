import axios from "axios";
import { useState } from "react";
import * as React from "react";

export const Api = () => {
    const [userJwt, setUserJwt] = React.useState('');

    const getAuthorize = () => {

      axios
        .post("{myAPI/authorization}",null)
        .then((response) => {
          setUserJwt(response.data.Token)
        })
        .catch((error) => { console.log("Error:", error)
        });
    };

    return (
      <div>
        <button className="button" onClick={getAuthorize}>
          Authorize
        </button>
      </div>
    );
  };
