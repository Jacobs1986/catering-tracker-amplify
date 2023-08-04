import React, {
    useContext
} from "react";

// CSS File
import "./customerList.css";

// Import context
import { ListOfCustomers } from "../../../pages/page-customers";

export default function CustomerList() {
    const { customer } = useContext(ListOfCustomers)
    return (
        <div className="row">
            {customer.length === 0 ? <div><h1>No customers</h1></div> : customer.map((customer, i) => (
                <div key={i} className="col-s-6 col-3">
                    <div className="customerCard">
                        <div className="cardHeader">
                            {customer.name}
                        </div>
                        <div className="cardBody">
                            <div><span>Total Orders:</span> {customer.totalOrders}</div>
                            <div><span>Last Order:</span> {customer.lastOrder}</div>
                            <div><span>Order Total:</span> ${customer.orderTotal}</div>
                        </div>
                        <div className="cardFooter">
                            <button>View Details</button>
                        </div>
                    </div>
                </div>
            ))}
            {/* <div class="col-s-5 col-3">
                <div className="customerCard">
                    <div className="cardHeader">
                        This Business
                    </div>
                    <div className="cardBody">
                        <div><span>Totals Orders:</span> Order total</div>
                        <div><span>Last Order:</span> Order date</div>
                        <div><span>Order Total:</span> Order total</div>
                    </div>
                    <div className="cardFooter">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <div class="col-s-5 col-3">
                <div className="customerCard">
                    <div className="cardHeader">
                        This Business
                    </div>
                    <div className="cardBody">
                        <div><span>Totals Orders:</span> Order total</div>
                        <div><span>Last Order:</span> Order date</div>
                        <div><span>Order Total:</span> Order total</div>
                    </div>
                    <div className="cardFooter">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <div class="col-s-5 col-3">
                <div className="customerCard">
                    <div className="cardHeader">
                        This Business
                    </div>
                    <div className="cardBody">
                        <div><span>Totals Orders:</span> Order total</div>
                        <div><span>Last Order:</span> Order date</div>
                        <div><span>Order Total:</span> Order total</div>
                    </div>
                    <div className="cardFooter">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <div class="col-s-5 col-3">
                <div className="customerCard">
                    <div className="cardHeader">
                        This Business
                    </div>
                    <div className="cardBody">
                        <div><span>Totals Orders:</span> Order total</div>
                        <div><span>Last Order:</span> Order date</div>
                        <div><span>Order Total:</span> Order total</div>
                    </div>
                    <div className="cardFooter">
                        <button>View Details</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};