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
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Last Order</th>
                            <th>Order Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map((customer, i) => (
                            <tr key={i}>
                                <td>{customer.name}</td>
                                <td>{customer.street} {customer.unit}, {customer.city} {customer.state} {customer.zip}</td>
                                {customer.Orders.length !== 0 ?
                                    <>
                                        <td>{customer.Orders[customer.Orders.length - 1].orderDate}</td>
                                        <td>{customer.Orders[customer.Orders.length - 1].orderTotal}</td>
                                    </> : 
                                    <>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </>
                                
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
};