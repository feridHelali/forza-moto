import { createContext, useContext, useReducer } from "react";
import { AlertType } from "./alert.actions";
import AlertReducer from "./alert.reducer";

const initialState = {
    alertShower: {
        type: AlertType.NONE,
        message: '',
        color:'black'
    }
}

export const AlertContext = createContext(initialState)

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const value = [state, dispatch]
    return (
        <AlertContext.Provider value={value}>
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => useContext(AlertContext)