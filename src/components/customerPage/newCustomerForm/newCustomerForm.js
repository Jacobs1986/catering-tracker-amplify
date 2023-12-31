import React, {
    useContext,
    useState,
    useReducer
} from "react";

// CSS File
import "./newCustomerForm.css";

// Import reducer
import { reducer as addContactReducer } from "../../../functions/reducer"

// Import context
import { ListOfCustomers } from "../../../pages/page-customers";

export default function NewCustomer() {
    const { customer, setCustomer } = useContext(ListOfCustomers)
    const [customerInfo, setNewCustomerInfo] = useReducer(addContactReducer, {});
    const [showForm, setShowForm] = useState(false)

    // Function to input information into customerInfo
    const handleInputCustomerInfo = event => {
        setNewCustomerInfo({
            type: 'added',
            name: event.target.name,
            value: event.target.value
        })
    }

    // Handle showing the add form
    const handleShowAddForm = () => {
        switch (showForm) {
            case (showForm === false):
                setShowForm(true);
                break
            default:
                setShowForm(false);
                setNewCustomerInfo({ type: 'reset' });
                setShowForm(!showForm);
        }
    }

    // Function to save the customer information
    const handleSaveCustomer = (event) => {
        event.preventDefault();
        let addOrders = ({
            ...customerInfo,
            Orders: []
        })
        console.log(addOrders)
        let currentState = [...customer, addOrders]
        setCustomer(currentState);
        setNewCustomerInfo({ type: 'reset' });
        setShowForm(!showForm);
    }

    // Function to cancel saving the information
    const handleCancelSave = event => {
        event.preventDefault()
        setNewCustomerInfo({ type: 'reset' });
        setShowForm(!showForm);
    }

    return (
        <div>
            <button id="addContactButton" onClick={handleShowAddForm}>Add New Customer</button>
            {/* New customer form */}
            <div>
                <form className="newCustomerForm" style={showForm === false ? { display: "none" } : { display: "block" }}>
                    {/* Customer name */}
                    <div className="row">
                        <div className="col-xs-12 col-s-1 col-lg-1">
                            <label htmlFor="name">Name:</label>
                        </div>
                        <div className="col-xs-12 col-s-10 col-lg-10">
                            <input type="text" name="name" value={customerInfo.name || ""} onChange={handleInputCustomerInfo} />
                        </div>
                    </div>
                    {/* Address */}
                    <div className="row">
                        {/* Street */}
                        <div className="col-xs-12 col-m-1">
                            <label htmlFor="street">Street:</label>
                        </div>
                        <div className="col-xs-12 col-m-5">
                            <input type="text" name="street" value={customerInfo.street || ""} onChange={handleInputCustomerInfo} />
                        </div>
                        <div className="col-m-1"></div>
                        {/* Apt/Unit */}
                        <div className="col-xs-12 col-m-1" id="newCustomerAptUnit">
                            <label htmlFor="unit">Apt/Unit:</label>
                        </div>
                        <div className="col-xs-4 col-m-2">
                            <input type="text" name="unit" value={customerInfo.unit || ""} onChange={handleInputCustomerInfo} />
                        </div>
                    </div>
                    <div className="row">
                        {/* City */}
                        <div className="col-xs-12 col-m-1">
                            <label htmlFor="city">City:</label>
                        </div>
                        <div className="col-xs-12 col-m-3">
                            <input type="text" name="city" value={customerInfo.city || ""} onChange={handleInputCustomerInfo} />
                        </div>
                        {/* State */}
                        <div className="col-xs-12 col-m-1">
                            <label htmlFor="state">State:</label>
                        </div>
                        <div className="col-xs-3 col-m-1">
                            <input type="text" name="state" value={customerInfo.state || ""} onChange={handleInputCustomerInfo} />
                        </div>
                        {/* Zip */}
                        <div className="col-xs-12 col-m-1">
                            <label htmlFor="zip">Zip:</label>
                        </div>
                        <div className="col-xs-5 col-m-2">
                            <input type="text" name="zip" value={customerInfo.zip || ""} onChange={handleInputCustomerInfo} />
                        </div>
                    </div>
                    <div className="row">
                        <button className="saveButton" onClick={handleSaveCustomer}>Save</button>
                        <button className="cancelButton" onClick={handleCancelSave}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};