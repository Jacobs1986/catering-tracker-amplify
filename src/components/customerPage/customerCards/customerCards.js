import React, {
    useContext,
} from "react";

// CSS File
import "./customerCards.css";

// Import context
import { ListOfCustomers } from "../../../pages/page-customers";

export default function CustomerCards() {
    const { customer } = useContext(ListOfCustomers)

    return (
        <div className="row customerContent">
            {customer.length === 0 ? <div><h1>No customers</h1></div> : customer.map((customer, i) => (
                <div key={i} className="col-xs-12 col-s-4 col-lg-3">
                    <div className="customerCard">
                        <div className="cardHeader">
                            {customer.name}
                        </div>
                        <div className="cardBody">
                            <div><span>Address:</span> {customer.street}</div>
                            <div><span>Number of Orders:</span> {customer.Orders.length}</div>
                            {customer.Orders.length === 0 ?
                                <>
                                    <div><span>Last Order:</span> NA</div>
                                    <div><span>Last Order:</span> NA</div>
                                </> :
                                <>
                                    <div><span>Last Order:</span> {customer.Orders[customer.Orders.length - 1].orderDate}</div>
                                    <div><span>Order Total:</span> {customer.Orders[customer.Orders.length - 1].orderTotal}</div>
                                </>

                            }
                            {/* <div><span>Last Order:</span> {customer.Orders[customer.Orders.length - 1].orderDate}</div>
                            <div><span>Order Total:</span> {customer.Orders[customer.Orders.length - 1].orderTotal}</div> */}
                        </div>
                        <div className="cardFooter">
                            <button>View Details</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};