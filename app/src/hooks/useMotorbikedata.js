import { useState,useEffect } from "react"
import api from '../api/common.http'

export const useMotorbikeData = ()=>{
    const [motorbikes,setMotorbikes]= useState([])
    const [changed, setChanged]=useState(false)
    const [limit,setLimit]=useState(4)
    const [page,setPage]=useState(1)
    const [query,setQuery]=useState('')
    const [pagination,setPagination]=useState(null)
   
    async function getMotorBikeById(id){
      let success={message:"",status:false,payload:null}
      await api.get(`/motor/one/${id}`)
            .then( response => response.data)
            .then( (data) =>{
              success.message="get the right Motorbike";
              success.status=true;
              success.payload=data
            })
            .catch( error =>{

              success.message=error?.response?.data?.error?.message
              success.status=false
              success.payload=null
            })

          return success
    }

    async function updateMotorbike (id,label,brand,description,price){
      let success={message:"",status:false}
      await api.put(`/motor/update/${id}`,JSON.stringify({label,brand,description,price}))
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

    async function getAllMotorbikes(){
        await api.get(`/motor/all?page=${page}&limit=${limit}&search=${query}`)
        .then( response => response.data)
        .then( data => {
          setMotorbikes(data.data)
          setPagination(data.info)
        })
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
    },[changed,page,limit,query])
  
    return {
      motorbikes,
      getAllMotorbikes,
      addNewMotorbike,
      removeMotorbike,
      getMotorBikeById,
      updateMotorbike,
      setLimit,
      limit,
      setPage,
      page,
      setQuery,
      query,
      pagination,
      getMotorbikes
    }
}