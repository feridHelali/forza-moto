import { createContext, useContext,useState } from "react";
export const AuthContext = createContext();


function AuthContextProvider({ children }) {
 
    const [user, setUser]=useState(null)

    const login=async (email,password)=>{
        const response = await fetch('http://localhost:3000/user/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
        });
        const json=await response.json();
        const token= json.payload.token;
        if(token){
            localStorage.setItem('user',JSON.stringify(json.payload))
            setUser(json.payload);
        }

        if(json.status==="Error"){
            return ({status:'Error'})
        }
        
        return({status:'Success',user:json.payload});
    
    }

    const isAuthenticated = async ()=>{
        const user= await localStorage.getItem('user');
        if(!user){
            return null
        }
        setUser(JSON.parse(user))
    }
    
    const logout=async ()=>{
       await localStorage.removeItem('user');
       setUser(null)
    }
    
    return (
        <AuthContext.Provider value={{user,login,isAuthenticated,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)

export default AuthContextProvider;