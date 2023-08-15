import React from "react";

// CSS File
import "./newItemForm.css";

export default function ItemDescription() {
    return (
        <div className="row">
            <div className="col-xs-12 col-s-12 col-m-7">
                <label htmlFor="itemDescription">Description:</label>
                <textarea id="itemDescription" name="itemDescription" />
            </div>
        </div>
    );
};