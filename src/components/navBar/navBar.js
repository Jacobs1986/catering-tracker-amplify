import React from "react";

// CSS File
import "./navBar.css";

export default function NavBar() {
    return (
        <div className="sidebar">
            <a href="#home">Home</a>
            <a href="#meu">Menu</a>
            <a href="#orders">Orders</a>
        </div>
    );
};