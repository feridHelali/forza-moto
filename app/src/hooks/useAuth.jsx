import { createContext, useContext, useState } from "react";
import api from "../../api/common";
import { dark } from "@mui/material/styles/createPalette";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);


  const login = async (email, password) => {
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    const token = json.payload.token;
    if (token) {
      localStorage.setItem("user", JSON.stringify(json.payload));
      setUser(json.payload);
    }

    if (json.status === "Error") {
      return { status: "Error" };
    }

    return { status: "Success", user: json.payload };
  };

  const register = async (fullName, email, password) => {
    let success={message:"",status:false};

    const _user = await JSON.stringify({ fullName, email, password })
    await api
      .post("/user/register", _user)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        success.message="You are successfully registered"
        success.status=true
      })
      .catch((error) =>{
        console.log(error)
         alert(JSON.stringify(error.response.data),null,3)
         success.message=error.response.data
         success.status=false
      } )
      return success
  };

  const isAuthenticated = async () => {
    const user = await localStorage.getItem("user");
    if (!user) {
      return null;
    }
    setUser(JSON.parse(user));
  };

  const logout = async () => {
    await localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, isAuthenticated, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
