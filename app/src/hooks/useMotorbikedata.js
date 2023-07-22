import { useState,useEffect } from "react"
import api from '../../api/common'

export const useMotorbikeData = ()=>{
    const [motorbikes,setMotorbikes]= useState([])
    const [changed, setChanged]=useState(false)

    async function getAllMotorbikes(){
        fetch('http://localhost:3000/motor/all')
        .then( data => data.json())
        .then( json => setMotorbikes(json) )
        .catch(error=>console.error(error.message))
    }

    const addNewMotorbike =async (label,brand,description,price)=>{
      let success={message:"",status:false}
        await api.post('/motor/add',JSON.stringify({label,brand,description,price}))
              .then( response => response.data)
              .then( () =>{
                success.message="Motorbike added Successfully";
                success.status=true;
              })
              .catch( error =>{

                success.message=error?.response?.data?.error?.message
                success.status=false
              })

            return success

    }

    async function removeMotorbike(id){
      let success={message:"",status:false}
        await api.delete(`/motor/delete/${id}`)
              .then( response => response.data)
              .then( (data) =>{
                success.message=data.message;
                success.status=true;
                setChanged(prev => !prev)
              })
              .catch( error =>{
                success.message=error?.response?.data?.error?.message
                success.status=false
              })

            return success


    }

  
    useEffect(()=>{
      getAllMotorbikes()
    },[changed])
  
    return [motorbikes,getAllMotorbikes,addNewMotorbike,removeMotorbike]
}