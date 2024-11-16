/**
 * Entry point of the React application.
 * This file initializes and renders the root component into the DOM.
 * 
 * @module index
 */


import React from "react"; // Import React to use JSX syntax
import * as ReactDOMClient from 'react-dom/client'; // Import ReactDOMClient for rendering
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import "./index.css"; // Import custom global CSS for the application
import App from "./App"; // Import the main App component


/**
 * Initializes the root of the React application and renders the App component.
 * This function binds the app to the HTML element with the id 'root'.
 * 
 * @function
 * @name renderApp
 * @description Renders the React app into the DOM at the root element.
 */
const root = ReactDOMClient.createRoot(document.getElementById('root')); // Find the root element in the DOM
root.render(<App/>); // Render the App component into the root element