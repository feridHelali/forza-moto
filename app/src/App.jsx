import "./App.css";
import MotorbikeUpdateForm from "./components/Motorbike/MotorbikeForms/MotorbikeUpdateForm";
import MotorbikeCatalogPage from "./components/Motorbike/ProductCatalogPage"
import HomePage from "./components/Motorbike/MotorbikeForms/layouts/HomePage";
import Navbar from "./components/Motorbike/MotorbikeForms/layouts/Navbar";
import Footer from "./components/Motorbike/MotorbikeForms/layouts/Footer";
import Login from "./components/user/Login";
import RegisterFrom from "./components/user/RegisterForm";
import ProductListPage from "./components/Motorbike/MotorbikeForms/layouts/ProductListPage";
import { useEffect, useState } from "react";
import MotorbikeAddForm from "./components/Motorbike/MotorbikeForms/MotorbikeAddForm";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from "./components/cart/CartPage";



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
    <Route path="/product/update/:id" element={<MotorbikeUpdateForm />} />
    <Route path="/catalog" element={<MotorbikeCatalogPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterFrom />} />
   </Routes>
   <Footer />
  </Router>

  );
}

export default App;
