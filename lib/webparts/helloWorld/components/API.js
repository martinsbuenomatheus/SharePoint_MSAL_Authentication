import axios from "axios";
import * as React from "react";
export var Api = function () {
    var _a = React.useState(''), userJwt = _a[0], setUserJwt = _a[1];
    var getToken = function () {
        var headers = {
            "user": "mabueno@uolinc.com",
            "codFuncional": "10021432",
        };
        axios
            .post("https://cvv-api-stg.azurewebsites.net/api/io/autorizacao", null, { headers: headers })
            .then(function (response) {
            // console.log("Token CVV:", response.data.Token)
            setUserJwt(response.data.Token);
        })
            .catch(function (error) {
            console.log("Erro:", error);
            //   if (error.response.status === 403) {
            //     alert("Your access is not allowed.");
            //   }
        });
    };
    var getValidacao = function () {
        var options = {
            // method: "GET",
            headers: {
                "user": "mabueno@uolinc.com",
                "token": userJwt,
            }
        };
        axios
            .get("https://cvv-api-stg.azurewebsites.net/api/io/valida-token", options)
            .then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
            console.log("Erro:", error);
            //   if (error.response.status === 401) {
            //     alert("Unauthorized");
            //   }
        });
    };
    var getCargaHoraria = function () {
        axios
            .get("https://cvv-api-stg.azurewebsites.net/api/IO/cargas-horarias")
            .then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
            console.log("Erro:", error);
            //   if (error.response.status === 401) {
            //     alert("Unauthorized");
            //   }
        });
    };
    return (React.createElement("div", null,
        React.createElement("button", { className: "button is-success", onClick: getCargaHoraria }, "Cargas horarias"),
        React.createElement("button", { className: "button", onClick: getToken }, "Autorizacao"),
        React.createElement("button", { className: "button", onClick: getValidacao }, "Valida\u00E7\u00E3o")));
};
//# sourceMappingURL=API.js.map