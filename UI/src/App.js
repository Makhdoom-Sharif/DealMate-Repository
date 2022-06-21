import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Productlist from './pages/Productlist'
import Register from './pages/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const user= true;
  return (

      
    
    <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
    <Routes>
      <Route path="/products/:category" element={<Productlist/>} />
    </Routes>
    <Routes>
      <Route path="/product/:id" element={<Product/>} />
    </Routes>
    <Routes>
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Routes>
    <Route path="/login" element={user? <Navigate to ="/" /> :<Login/>} />
    </Routes>
    <Routes>
      <Route path="/register" element={user? <Navigate to ="/" /> :<Register/>} />
    </Routes>
  </>
  )
}

export default App;