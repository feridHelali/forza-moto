import { useState,useEffect } from "react"

export const useMotorbikeData = ()=>{
    const [motorbikes,setMotorbikes]= useState([])

    async function getAllMotorbikes(){
        fetch('http://localhost:3000/motor/all')
        .then( data => data.json())
        .then( json => setMotorbikes(json) )
        .catch(error=>console.error(error.message))
    }

    const addNewMotorbike = ({label,brand,description,price})=>{
        fetch('http://localhost:3000/motor/add',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({label,brand,description,price})
           })
           .then(data=>{
            if(data.status===200){
              return data.json()
            }else{
              alert('Error')
              throw Error('Error')
            }
           })
           .then(json=>console.log(json))
           .catch(error=>console.log(error.message))

    }

  
    useEffect(()=>{
      getAllMotorbikes()
    },[motorbikes])
  
    return [motorbikes,getAllMotorbikes,addNewMotorbike]
}