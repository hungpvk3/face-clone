import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./routes";

const RouteConfig = () => {
    return (
        <Router>
            <MainRoute />
        </Router>
    );
};

export default RouteConfig;
