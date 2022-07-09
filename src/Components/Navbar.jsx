import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const styles = {
    links : {
        color : "white",
        backgroundColor : '#f1356d',
        borderRadius : '8px'
    }
}

const pages = ['Products', 'Pricing', 'Blog'];
const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>The Gogo Blog</h1>

            <div className="links">
                <Link to="/" style={styles.links}>Home</Link>
                <Link to="/create" style={styles.links} > New Blog</Link>
            </div>

        </nav>
    );
}
 
export default Navbar;