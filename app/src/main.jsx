import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContextProvider from "./hooks/useAuth";
import { AlertProvider } from './components/Alert/AlertContext';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AlertProvider>
       <App />
      </AlertProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
