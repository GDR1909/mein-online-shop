import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';

class App extends Component {
    state = {  } 
    render() { 
        return  <React.Fragment>
                    <Navbar/>
                    <div className="product-container">
                        <Product img="tomatoes.jpg" title="Tomaten" description="5,99€ pro Kilo"/>
                        <Product img="cucumbers.jpg" title="Gurken" description="6,99€ pro Kilo"/>
                        <Product img="apples.jpg" title="Äpfel" description="4,49€ pro Kilo"/>
                        <Product img="pears.jpg" title="Birnen" description="5,49€ pro Kilo"/>
                    </div>
                </React.Fragment>;
    }
}
 
export default App;