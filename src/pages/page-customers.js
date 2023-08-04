import React from "react";

// Components
import CustomerList from "../components/customerPage/customerList/customerList";

export default function Customers() {
    return (
        <div className="content">
            <h1>Customers</h1>
            <CustomerList />
        </div>
    );
};