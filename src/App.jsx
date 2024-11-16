import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = { 
        items: []
     }

    // addItem = (amount, name, price) => {
    //     this.setState({items: this.state.items.push({
    //         amount: amount,
    //         name: name,
    //         price: price
    //     });
    // }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        currentItems.push(
            {
                amount,
                name,
                price
            }
        );
        this.setState({ items: currentItems });
        console.log(this.state);
        
    }

    render() { 
        return <React.Fragment>
            <Navbar/>

            <div className="main-container">
                <div className="product-container">
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 5.99)} img="tomatoes.jpg" title="Tomaten" description="5,99€ pro Kilo"/>
                    <Product onAdd={() => this.addItem(1, 'Gurken', 6.99)} img="cucumbers.jpg" title="Gurken" description="6,99€ pro Kilo"/>
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 4.49)} img="apples.jpg" title="Äpfel" description="4,49€ pro Kilo"/>
                    <Product onAdd={() => this.addItem(1, 'Birnen', 5.49)} img="pears.jpg" title="Birnen" description="5,49€ pro Kilo"/>
                </div>

                <ShoppingCart items={this.state.items}/>
            </div>
        </React.Fragment>;
    }
}
 
export default App;