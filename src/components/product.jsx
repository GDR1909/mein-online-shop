/**
 * Product component.
 * Displays a single product card with an image, title, description, and an "Add" button.
 * 
 * @module Product
 */


import React, { Component } from 'react'; // Import React and Component base class from the React library


/**
 * Product Component - Represents a product card in the UI.
 * This component receives props to display product details and handle interactions.
 * @extends {Component}
 */
class Product extends Component {
    /**
     * Component state (not used in this example but initialized for consistency).
     * @property {Object} state - An empty state object (can be extended for future use).
     */
    state = {  }

    
    /**
     * Renders the product card with image, title, description, and an "Add" button.
     * The button triggers a callback function provided via props.
     * 
     * @returns {React.ReactNode} The rendered product card element.
     */
    render() { 
        return <div className="card" styles={{width: '18rem'}}>
            <img src={"/assets/img/" + this.props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <button onClick={this.props.onAdd} className="btn btn-primary">Hinzufügen</button>
            </div>
        </div>;
    }
}

export default Product;