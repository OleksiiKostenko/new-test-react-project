import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Component/App/App.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/new-test-react-project/">
      <App />
    </HashRouter>
  </React.StrictMode>
);
