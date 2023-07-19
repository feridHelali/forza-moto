import { createContext, useContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);


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

    const register =(email,password)=>{
        fetch('http://localhost:3000/user/register',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({fullName,email,password})
           })
           .then(data=>{
            if(data.status===200){
               console.log(data.json())
      
            }else{
              alert('Error')
              throw Error('Error')
            }
           })
           .then(json=>console.log(json))
           .catch(error=>console.log(error.message))
         
        };
    

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
        <AuthContext.Provider value={{user,login,isAuthenticated,logout,register}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)

export default AuthContextProvider;