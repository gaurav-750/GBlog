import React, { Component } from 'react';

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
                <a href="/" style={styles.links}>Home</a>
                <a href="/create" style={styles.links} > New Blog</a>
            </div>

        </nav>
    );
}
 
export default Navbar;