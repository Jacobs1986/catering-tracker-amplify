import React, {
    useContext
} from "react";

// CSS File
import "./newItemForm.css";

// Import context
import { NewItemContext } from "./newItemForm";

export default function AddonItemForm() {
    const { newItemInfo, handleInputChange } = useContext(NewItemContext);

    return (
        <div className="row">
            {/* Add on Name */}
            <div className="col-xs-12">
                <label htmlFor="addOnName">Name:</label>
                <input type="text" id="addOnName" name="itemName" value={newItemInfo.itemName || ""} onChange={handleInputChange} />
            </div>
            {/* Cost */}
            <div className="col-xs-6 col-m-2">
                <label htmlFor="addOnCost">Cost:</label>
                <input type="text" id="addOnCost" name="addOnCost" />
            </div>
        </div>
    );
};