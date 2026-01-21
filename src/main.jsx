import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.jsx";
import { DesaProvider } from "./contexts/DesaContext.jsx";
import "./styles/theme.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DesaProvider>
        <App />
      </DesaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
