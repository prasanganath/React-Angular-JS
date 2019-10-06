import React, { Component } from "react";
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
//import Product from "./Product";

export default class ProductList extends Component {
    render() {
        return (
            <section>
               <Title name="your" title=" cart" />
               <CartColumns />
               <EmptyCart />



            </section>

               

          

        );
    }
}