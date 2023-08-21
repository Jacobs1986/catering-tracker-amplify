import React, {
    useContext
} from "react";

// CSS File
import "./newItemForm.css";

// Import context
import { NewItemContext } from "./newItemForm";

export default function NameAndCategories() {
    const { newItemInfo, handleInputChange } = useContext(NewItemContext)

    return (
        <div className="row">
            {/* New item Name */}
            <div className="col-xs-12 col-s-4 col-m-4">
                <label htmlFor="itemName">Name:</label>
                <input type="text" id="itemName" name="itemName" value={newItemInfo.itemName || ""} onChange={handleInputChange} />
            </div>
            {/* Categories */}
            <div className="col-xs-12 col-s-4 col-m-4">
                <label htmlFor="itemCategory">Category:</label>
                <select name="itemCategory" id="itemCategory" value={newItemInfo.itemCategory || ""} onChange={handleInputChange}>
                    <option></option>
                    <option value="main">Main</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="dessert">Dessert</option>
                    <option value="drink">Drink</option>
                    <option value="side">Side</option>
                </select>
            </div>
            {/* Subcategory */}
            <div className="col-xs-12 col-s-4 col-m-4">
                <label htmlFor="itemSubcategory">Subcategory: </label>
                <input list="subCatList" name="itemSubcategory" id="itemSubcategory" value={newItemInfo.itemSubcategory || ""} onChange={handleInputChange} />
                <datalist id="subCatList">
                    <option value="Soup" />
                    <option value="Sandwich" />
                    <option value="Salad" />
                </datalist>
            </div>
        </div>
    );
};