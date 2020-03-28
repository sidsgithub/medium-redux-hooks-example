import React from 'react';
import Routes from "./Routes";
import NavbarComponent from './Component/Navbar/Navbar'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
     <NavbarComponent/>
     <Routes/>
   </Router>
  );
}

export default App;
