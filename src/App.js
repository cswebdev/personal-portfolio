import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}

export default App;
