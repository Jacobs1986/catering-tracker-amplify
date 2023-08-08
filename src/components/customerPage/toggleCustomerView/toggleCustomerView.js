import React from "react";

// CSS File
import "./toggleCustomerView.css";

export default function ToggleView() {
    return (
        <div className="row">
            <div className="col-xs-5">
                <p style={{margin: "0px"}}>Toggle customer list:</p>
            </div>
            <div className="col-xs-5">
                <form className="toggleForm">
                    <input type="radio" id="Cards" name="toggle_View" value="cards" defaultChecked />
                    <label htmlFor="Cards">Cards</label>
                    <input type="radio" id="Table" name="toggle_View" value="table" />
                    <label htmlFor="Table">Table</label>
                </form>
            </div>
        </div>
    );
};