import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter basename="/country-quiz">
      <App />
    </BrowserRouter>
  </AppProvider>
);
