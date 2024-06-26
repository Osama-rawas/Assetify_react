import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import App from "./App";
import UserProvider from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/Assetify_react">
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);
