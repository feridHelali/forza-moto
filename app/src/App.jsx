import "./App.css";
import MotorbikeUpdateForm from "./components/Motorbike/MotorbikeForms/MotorbikeUpdateForm";
import MotorbikeCatalogPage from "./components/Motorbike/ProductCatalogPage"
import HomePage from "./components/layouts/HomePage";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Login from "./components/user/Login";
import RegisterFrom from "./components/user/RegisterForm";
import ProductListPage from "./components/layouts/ProductListPage";
import MotorbikeAddForm from "./components/Motorbike/MotorbikeForms/MotorbikeAddForm";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from "./components/cart/CartPage";
import AlertPopup from './components/Alert/AlertPopup'
import MyOrders from "./components/MyOrders/MyOrders";


function App() {
  console.log(import.meta.env.API_URL)
  return (
 <Router>
  <Navbar />
  <AlertPopup />
   <Routes>
    <Route path="/" index element={ <HomePage />} />
    <Route path="/product/add" element={<MotorbikeAddForm />} />
    <Route path="/product/update/:id" element={<MotorbikeUpdateForm />} />
    <Route path="/products"  element={ <ProductListPage />} />
    <Route path="/catalog" element={<MotorbikeCatalogPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/my-orders" element={<MyOrders />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterFrom />} />
   </Routes>
   <Footer />
  </Router>

  );
}

export default App;
