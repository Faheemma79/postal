import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./components/books";
import Login from "./components/login";
import ForgotPassword from "./components/ForgotPassword";
import Number from "./components/Number";
import Axios from "./components/Axios";
import UseEffect from "./components/UseEffect";
import AxiosString from "./components/AxiosString";
import RegistForm from "./components/RegistForm";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products"; 
import ErrorHandling from "./components/ErrorHandling";
import Pagination from "./components/Pagination";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Validation from "./components/Validation";
import Dashboard from "./components/Dashboard";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Header from "./components/Header";
import FooterHome from "./components/FooterHome";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div>
    <Header/>
    
    <ToastContainer/>
    <BrowserRouter>    
    <Navbar />
      {/* <Counter />
      <Button /> */}
      {/* <ErrorHandling/>
      <Pagination/> */}
      <Routes>
      <Route path="/user" element={<PrivateRoute/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/RegistForm" element={<RegistForm/>}/>
        <Route path="/products/:userId" element={<ProductDetails/>}/>
        <Route path="/Products" element={ <Products/>} />
        <Route path="/Validation" element={<Validation/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
    </BrowserRouter>
    <div>
    
    </div>
    <FooterHome/>
    </div>    
  );
}
export default App;


