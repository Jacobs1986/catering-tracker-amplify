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
const customerList = [
    {
        name: "The Big Happy",
        totalOrders: "16",
        lastOrder: "08/03/2023",
        orderTotal: "137.68"
    },
    {
        name: "Mission Wolf",
        totalOrders: "6",
        lastOrder: "04/13/2023",
        orderTotal: "93.47"
    },
    {
        name: "Laura's Daycare",
        totalOrders: "30",
        lastOrder: "12/03/2022",
        orderTotal: "190.08"
    },
    {
        name: "Daryl's Friendly Garden",
        totalOrders: "24",
        lastOrder: "10/31/2022",
        orderTotal: "157.20"
    },
    {
        name: "Daryl's Friendly Garden",
        totalOrders: "24",
        lastOrder: "10/31/2022",
        orderTotal: "157.20"
    },
    {
        name: "Daryl's Friendly Garden",
        totalOrders: "24",
        lastOrder: "10/31/2022",
        orderTotal: "157.20"
    },
    {
        name: "Daryl's Friendly Garden",
        totalOrders: "24",
        lastOrder: "10/31/2022",
        orderTotal: "157.20"
    },
    {
        name: "Daryl's Friendly Garden",
        totalOrders: "24",
        lastOrder: "10/31/2022",
        orderTotal: "157.20"
    },
    {
        name: "Daryl's Friendly Garden",
        totalOrders: "24",
        lastOrder: "10/31/2022",
        orderTotal: "157.20"
    }

]

// Context
export const SetView = createContext();
export const ListOfCustomers = createContext()

export default function Customers() {
    const [toggleView, setToggleView] = useState(false)
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
                    {!toggleView ? <CustomerCards /> : <CustomerTable />}    
                </div>
                <div className="newCustomerDiv">
                    <NewCustomer />
                </div>
            </ListOfCustomers.Provider>
        </div>
    );
};