import React from "react";

// CSS File
import "./navBar.css";

export default function NavBar() {
    return (
        <div className="sidebar">
            <a href="/">Home</a>
            <a href="/menu">Menu Items</a>
            <a href="/customers">Customers</a>
            <a href="/orders">Orders</a>
        </div>
    );
};