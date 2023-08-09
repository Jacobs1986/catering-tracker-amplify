import React, {
    createContext,
    useState
} from "react";

// Styling
import "./page-styling/page-customers.css"

// Components
import ToggleView from "../components/customerPage/toggleCustomerView/toggleCustomerView";
import CustomerCards from "../components/customerPage/customerCards/customerCards";
import CustomerTable from "../components/customerPage/customerTable/customerTable";
import NewCustomer from "../components/customerPage/newCustomerForm/newCustomerForm";

// Customer list
import { customerList } from "../customerList";

// Context
export const SetView = createContext();
export const ListOfCustomers = createContext()

export default function Customers() {
    const [toggleView, setToggleView] = useState("cards")
    const [customer, setCustomer] = useState(customerList)
    return (
        <div className="content">
            <h1>Customers</h1>
            <SetView.Provider value={{ setToggleView }}>
                <div className="toggleDiv">
                    <ToggleView />
                </div>
            </SetView.Provider>
            <ListOfCustomers.Provider value={{ customer, setCustomer }}>
                <div className="customerContent">
                    {toggleView === "cards" ? <CustomerCards /> : <CustomerTable />}    
                </div>
                <div className="newCustomerDiv">
                    <NewCustomer />
                </div>
            </ListOfCustomers.Provider>
        </div>
    );
};