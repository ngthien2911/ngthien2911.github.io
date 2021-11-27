import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Category from './Pages/Category';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import ManageOrders from './Pages/ManageOrders';
import { library } from '@fortawesome/fontawesome-svg-core';
import Footer from './Pages/Footer';

import Homepanel from './Pages/Homepanel';
import ProductById from './product/ProductById';
import CategoryById from './category/CategoryById';
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (

    <Router>
      <ToastContainer/>
    <div>
      <Nav/>
  
      <Routes>
          
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/:id"  element={<ProductById/>}></Route>
          <Route path="products/category" exact element={<Category/>}/>
          <Route path="products/category/:id"  element={<CategoryById/>}/>

          <Route path="/cart"  element={<Cart/>}/>
          <Route path="/checkout"  element={<Checkout/>}/>
          <Route path="/manageorder"  element={<ManageOrders/>}/>
          
         
        

      </Routes>
    <Footer/>
    
    </div>
    </Router>
  );
}

export default App;
