import React, { Component } from "react";
//import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';


class App extends Component {
  render(){
    return (
      <React.Fragment>
      <Navbar></Navbar>
      <Default></Default>
      <ProductList></ProductList>
      <Cart></Cart>
      <Details></Details>


      

      </React.Fragment>
      


    );
  }
}

export default App;
