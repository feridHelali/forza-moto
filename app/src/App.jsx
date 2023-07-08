import "./App.css";
import MotorbikeCard from "./components/Motorbike/MotorbikeCard";
import yamaha from './assets/yamaha.png'
import yamaha2 from './assets/yamaha_2.png'
import { useEffect, useState } from "react";



function App() {
  const [motorbikes,setMotorbikes]= useState([])

  async function getAllMotorbikes(){
      fetch('http://localhost:3000/motor/all')
      .then( data => data.json())
      .then( json => setMotorbikes(json) )
      .catch(error=>console.error(error.message))
  }

  useEffect(()=>{
    getAllMotorbikes()
  },[])

  return (
    <div className="app">
      <div className="app__body">
      {motorbikes.map((motorbike,index) => (
        <MotorbikeCard
          key={index}
          label={motorbike.label}
          description={motorbike.description}
          brand={motorbike.brand}
          price={motorbike.price}
          coverUrl={motorbike.cover_url}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
