import React from "react";

// CSS File
import "./newItemForm.css";

export default function SizeAndCost() {
    return (
        <div>
            {/* Size radios */}
            <div className="row">
                <div className="col-xs-12">
                    Does this item come in different sizes?
                </div>
                <div className="col-xs-12">
                    <input type="radio" id="sizeYes" name="size_radio" value="yesSize" />
                    <label htmlFor="sizeYes">Yes</label>
                    <input type="radio" id="sizeNo" name="size_radio" value="noSize" />
                    <label htmlFor="sizeNo">No</label>
                </div>
            </div>
            {/* if the yes radio is selected */}
            <div className="row">
                <div className="col-xs-12">
                    <label htmlFor="numberOfSizes">Number of Sizes: </label>
                    <input type="number" id="numberOfSizes" name="numberOfSizes" />
                </div>
            </div>
            {/* Size input, the number of them will depend on numberOfSizes input */}
            <div className="row">
                <div className="col-xs-4 col-s-3 col-m-2 col-lg-2">
                    <label htmlFor="sizeType">Size Type:</label>
                    <input type="text" id="sizeType" name="sizeType" />
                    <label htmlFor="sizeCost">Cost: </label>
                    <input type="text" id="sizeCost" name="sizeCost" />
                </div>
            </div>
            {/* If the no radio is selected */}
            <div className="row">
                <div className="col-xs-6 col-s-3 col-m-2 col-lg-2">
                    <label htmlFor="itemCost">Cost: </label>
                    <input type="text" id="itemCost" name="itemCost" />
                </div>
            </div>
        </div>
    );
};