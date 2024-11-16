/**
 * ShoppingCart component.
 * Displays a list of items in the shopping cart with their quantities, names, and prices.
 * 
 * @module ShoppingCart
 */


import React, { Component } from 'react'; // Import React and Component base class from the React library


/**
 * ShoppingCart Component - Represents the shopping cart UI.
 * This component receives a list of items via props and displays them.
 * @extends {Component}
 */
class ShoppingCart extends Component {
    /**
     * Component state (not used in this example but initialized for consistency).
     * @property {Object} state - An empty state object (can be extended for future use).
     */
    state = {} 


    /**
     * Renders the shopping cart with a list of items.
     * Each item includes the quantity, name, and price.
     * 
     * @returns {React.ReactNode} The rendered shopping cart element.
     */
    render() { 
        return <div className="shopping-cart">
            {/* Shopping cart title */}
            <h2>Warenkorb</h2>

            {/* Render each item in the shopping cart */}
            { this.props.items.map(item => <div key={item.name}>{ item.amount }x { item.name } { item.price }€</div>) }
        </div>;
    }
}
 
export default ShoppingCart;