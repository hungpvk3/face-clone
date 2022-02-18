import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/globle.scss";
import reportWebVitals from "./reportWebVitals";
import Route from "./routes";
import { ProviderApp } from "./store";

ReactDOM.render(
    <React.StrictMode>
        <ProviderApp>
            <Route />
        </ProviderApp>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
