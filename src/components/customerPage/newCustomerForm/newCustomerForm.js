import React from "react";

// CSS File
import "./newCustomerForm.css";

export default function NewCustomer() {
    return (
        <div>
            <h3>Add New Customer</h3>
            {/* New customer form */}
            <form className="newCustomerForm">
                {/* Customer name */}
                <div className="row">
                    <div className="col-xs-12 col-s-1 col-lg-1">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className="col-xs-12 col-s-10 col-lg-10">
                        <input type="text" name="name" />
                    </div>
                </div>
                {/* Address */}
                <div className="row">
                    {/* Street */}
                    <div className="col-xs-12 col-m-1">
                        <label htmlFor="street">Street:</label>
                    </div>
                    <div className="col-xs-12 col-m-5">
                        <input type="text" name="street" />
                    </div>
                    <div className="col-m-1"></div>
                    {/* Apt/Unit */}
                    <div className="col-xs-12 col-m-1" id="newCustomerAptUnit">
                        <label htmlFor="unit">Apt/Unit:</label>
                    </div>
                    <div className="col-xs-4 col-m-2">
                        <input type="text" name="unit" />
                    </div>
                </div>
                <div className="row">
                    {/* City */}
                    <div className="col-xs-12 col-m-1">
                        <label htmlFor="city">City:</label>
                    </div>
                    <div className="col-xs-12 col-m-3">
                        <input type="text" name="city" />
                    </div>
                    {/* State */}
                    <div className="col-xs-12 col-m-1">
                        <label htmlFor="state">State:</label>
                    </div>
                    <div className="col-xs-3 col-m-1">
                        <input type="text" name="state" />
                    </div>
                    {/* Zip */}
                    <div className="col-xs-12 col-m-1">
                        <label htmlFor="zip">Zip:</label>
                    </div>
                    <div className="col-xs-5 col-m-2">
                        <input type="text" name="zip" />
                    </div>
                </div>
                <div className="row">
                    <button className="saveButton">Save</button>
                    <button className="cancelButton">Cancel</button>
                </div>
            </form>
        </div>
    );
};