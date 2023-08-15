import React from "react";

// CSS File
import "./newItemForm.css";

export default function AddonItemForm() {
    return (
        <div className="row">
            {/* Add on Name */}
            <div className="col-xs-12">
                <label htmlFor="addOnName">Name:</label>
                <input type="text" id="addOnName" name="addOnName" />
            </div>
            {/* Cost */}
            <div className="col-xs-6 col-m-2">
                <label htmlFor="addOnCost">Cost:</label>
                <input type="text" id="addOnCost" name="addOnCost" />
            </div>
        </div>
    );
};