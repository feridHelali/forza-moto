import axios from "axios";

const token=await JSON.parse(localStorage.getItem('user'))?.token || ""

const api = axios.create({
    baseURL:"http://localhost:3000",
    headers:{
        "Content-Type":"application/json",
        "x-access-token":`${token}`
    }
})

export default api;