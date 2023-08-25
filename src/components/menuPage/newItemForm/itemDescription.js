import React, {
    useContext
} from "react";

// CSS File
import "./newItemForm.css";

// Import context 
import { NewItemContext } from "./newItemForm";

export default function ItemDescription() {
    // Set the hooks
    const { newItemInfo, handleInputChange } = useContext(NewItemContext);

    return (
        <div className="row">
            <div className="col-xs-12 col-s-12 col-m-7">
                <label htmlFor="itemDescription">Description:</label>
                <textarea id="itemDescription" name="description" value={newItemInfo.description || ""} onChange={handleInputChange} />
            </div>
        </div>
    );
};