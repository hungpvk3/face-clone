import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./routes";
import PublicRoute from "./PublicRoute";
import { useStore } from "../store";

const RouteConfig = () => {
  const {
    authState: { isAuthenticated },
  } = useStore();

  return (
    <Router>{isAuthenticated ? <PrivateRoute /> : <PublicRoute />}</Router>
  );
};

export default RouteConfig;
