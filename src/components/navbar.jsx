/**
 * Navbar component.
 * Displays a simple navigation bar for the application.
 * 
 * @module Navbar
 */


import React, { Component } from 'react'; // Import React and Component base class from the React library


/**
 * Navbar Component - A reusable navigation bar.
 * This component displays a Bootstrap-styled navbar with a brand link.
 * @extends {Component}
 */
class Navbar extends Component {
    /**
     * Component state (not used in this example but initialized for consistency).
     * @property {Object} state - An empty state object (can be extended for future use).
     */
    state = {  }
    

    /**
     * Renders the navigation bar.
     * 
     * @returns {React.ReactNode} The rendered navbar element.
     */
    render() {
        return <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
            </div>
        </nav>
    }
}
 
export default Navbar;