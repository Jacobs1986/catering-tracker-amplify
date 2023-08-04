import React, {
    createContext,
    useState
} from "react";

// Components
import CustomerList from "../components/customerPage/customerList/customerList";

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
    }

]

// Context
export const ListOfCustomers = createContext()

export default function Customers() {
    const [customer, setCustomer] = useState(customerList)
    return (
        <div className="content">
            <h1>Customers</h1>
            <ListOfCustomers.Provider value={{ customer, setCustomer }}>
                <CustomerList />
            </ListOfCustomers.Provider>
        </div>
    );
};