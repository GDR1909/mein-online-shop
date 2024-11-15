import React from "react";
import ReactDom from "react-dom";
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/product";

ReactDom.render(<Product/>, document.getElementById('root'));