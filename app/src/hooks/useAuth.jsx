import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/common.http";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    let success = { message: "", status: false };
    const credentials = await JSON.stringify({ email, password })

    await api.post("/user/login", credentials)
      .then(response => response.data)
      .then(data => {
        console.log(data)
        const token = data?.token;
        if (token) {
          localStorage.setItem("user", JSON.stringify(data));
          setUser(data);
        }
        success.message = "Logged in successfully"
        success.status = true

      }).catch(error => {
        console.log(error)
        success.message = JSON.stringify(error?.response?.data?.error)
        success.status = false

      });
    return success
  };

  const register = async (fullName, email, password) => {
    let success = { message: "", status: false };

    const _user = await JSON.stringify({ fullName, email, password })
    await api
      .post("/user/register", _user)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        success.message = "You are successfully registered"
        success.status = true
      })
      .catch((error) => {
        success.message = error?.response?.data
        success.status = false
      })
    return success
  };

  const logout = async () => {
    await localStorage.removeItem('user')
    setUser(null);
  };

  useEffect(() => {
    const isAuthenticated = async () => {
      const currentUser = await localStorage.getItem('user')
      if (!currentUser) {
        return null
      }
      setUser(JSON.parse(currentUser))

    }
    isAuthenticated()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
