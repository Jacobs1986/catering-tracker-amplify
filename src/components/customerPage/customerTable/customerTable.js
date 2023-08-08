import React, {
    useContext
} from "react";

// CSS File
import "./customerTable.css";

// Import context
import { ListOfCustomers } from "../../../pages/page-customers";

export default function CustomerTable() {
    const { customer } = useContext(ListOfCustomers)
    return (
        <div>
            {customer.length === 0 ? <div><h1>No Customers</h1></div> : 
                <table className="customerTable">
                    <tr>
                        <th>Customer Name</th>
                        <th>Total Orders</th>
                        <th>Last Order</th>
                        <th>Order Total</th>
                    </tr>
                    {customer.map((customer, i) => (
                        <tr key={i}>
                            <td>{customer.name}</td>
                            <td>{customer.totalOrders}</td>
                            <td>{customer.lastOrder}</td>
                            <td>{customer.orderTotal}</td>
                        </tr>
                    ))}
                </table>
            }
        </div>
    );
};