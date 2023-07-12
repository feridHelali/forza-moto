import "./App.css";
import HomePage from "./components/Motorbike/MotorbikeForms/layouts/HomePage";
import Navbar from "./components/Motorbike/MotorbikeForms/layouts/Navbar";
import Footer from "./components/Motorbike/MotorbikeForms/layouts/Footer";
import ProductListPage from "./components/Motorbike/MotorbikeForms/layouts/ProductListPage";
import { useEffect, useState } from "react";
import MotorbikeAddForm from "./components/Motorbike/MotorbikeForms/MotorbikeAddForm";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



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
 <Router>
  <Navbar />
   <Routes>
    <Route path="/" index element={ <HomePage />} />
    <Route path="/products"  element={ <ProductListPage />} />
    <Route path="/products/add" element={<MotorbikeAddForm />} />
   </Routes>
   <Footer />
  </Router>

  );
}

export default App;
