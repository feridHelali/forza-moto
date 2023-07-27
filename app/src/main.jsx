import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContextProvider from "./hooks/useAuth";
import { AlertProvider } from "./components/Alert/AlertContext";
import "./index.css";
import CartContextProvider from "./hooks/useCart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
