import React, { Component } from "react";
import {Switch,Route} from 'react-router-dom';
//import React from 'react';
//import logo from './logo.svg';
import './App.css';
//edit by today
import Login from './Login';
//
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Model from './components/Model';
//import CartColumns from './components/Cart/CartColumns';


class App extends Component {

  //////////////////////////////////////
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }
  //////////////////////////////////////////
  render(){
    return (

      /////////////////////////

       <div className="App"> 
     {this.state.user ?  ( <App/>) : (<Login />)}
     </div>
     //////////////////////////////

      // <React.Fragment>
      // <Navbar />
      // <Switch>
      //   <Route exact path="/" component={ProductList} />
      //   <Route path="/details" component={Details} />
      //   <Route path="/cart" component={Cart} />
      //   <Route component={Default} />

        

      
      // </Switch>
      // <Model />
      
    
     


      

      // </React.Fragment>

      ///////////////////////////////////////
      


    );
  }
}

export default App;
