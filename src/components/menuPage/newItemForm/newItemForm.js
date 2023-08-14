import React from "react";

// CSS File
import "./newItemForm.css";

export default function NewItemForm() {
    return (
        <div>
            <button>Add New Item</button>
            <form className="formNewItem">
                <div className="row">
                    {/* Item name */}
                    <div className="col-xs-12 col-s-4">
                        <label htmlFor="itemName">Name:</label>
                        <input type="text" name="itemName" />
                    </div>
                    {/* Item type */}
                    <div className="col-xs-12 col-s-4">
                        <label htmlFor="itemType">Type:</label>
                        <select name="itemType">
                            <option value="main">Main</option>
                            <option value="side">Side</option>
                            <option value="drink">Drink</option>
                            <option value="dessert">Dessert</option>
                        </select>
                    </div>
                    {/* Attributes */}
                    <div className="col-xs-12">

                    </div>
                </div>
            </form>
        </div>
    );
};