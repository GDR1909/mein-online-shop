/**
 * Main application component.
 * This component manages the state of the shopping cart and renders the Navbar, 
 * Product list, and ShoppingCart components.
 * 
 * @module App
 */


import React, { Component } from 'react'; // Import React and Component base class from the React library
import Navbar from './components/navbar'; // Navigation bar component
import Product from './components/product'; // Product component to display individual products
import ShoppingCart from './components/shopping-cart'; // Shopping cart component


/**
 * App Component - The root-level component for managing and displaying the application layout.
 * @extends {Component}
 */
class App extends Component {
    /**
     * Application state.
     * @property {Array} items - The list of items in the shopping cart.
     */
    state = { 
        items: [] // Initialize the shopping cart as an empty array
    }


    /**
     * Adds an item to the shopping cart.
     * If the item already exists, its amount is incremented.
     * 
     * @param {number} amount - The quantity of the item being added.
     * @param {string} name - The name of the item.
     * @param {number} price - The price of the item.
     */

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        let existingItem = this.state.items.find(item => item.name === name);

        if (existingItem) {
            // Increment the amount of the existing item
            existingItem.amount++;
        } else {
            // Add the new item to the cart
            currentItems.push(
                {
                    amount,
                    name,
                    price
                }
            );
        }

        this.setState({ items: currentItems }); // Update the state with the new/updated items list
        console.log(this.state); // Log the state for debugging
    }


    /**
     * Renders the application layout including the Navbar, Product list, and ShoppingCart.
     * 
     * @returns {React.ReactNode} The rendered application layout.
     */
    render() { 
        return <React.Fragment>
            {/* Navigation bar */}
            <Navbar/>

            <div className="main-container">
                <div className="product-container">
                    {/* Render Product components with predefined properties */}
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 5.99)} img="tomatoes.jpg" title="Tomaten" description="5,99€ pro Kilo"/>
                    <Product onAdd={() => this.addItem(1, 'Gurken', 6.99)} img="cucumbers.jpg" title="Gurken" description="6,99€ pro Kilo"/>
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 4.49)} img="apples.jpg" title="Äpfel" description="4,49€ pro Kilo"/>
                    <Product onAdd={() => this.addItem(1, 'Birnen', 5.49)} img="pears.jpg" title="Birnen" description="5,49€ pro Kilo"/>
                </div>

                {/* ShoppingCart component displaying the items in the cart */}
                <ShoppingCart items={this.state.items}/>
            </div>
        </React.Fragment>;
    }
}
 
export default App;