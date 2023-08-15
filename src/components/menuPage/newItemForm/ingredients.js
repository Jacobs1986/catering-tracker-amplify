import React from "react";

// CSS File
import "./newItemForm.css";

export default function Ingredients() {
    return (
        <div>
            {/* Ingredients radios */}
            <div className="row">
                <div className="col-xs-12">
                    Does this item have ingredients?
                </div>
                <div className="col-xs-12">
                    {/* Yes radio */}
                    <input type="radio" id="ingredientsYes" name="ingredients_radio" value="yesIngredients" />
                    <label htmlFor="ingredientsYes">Yes</label>
                    {/* No Radio */}
                    <input type="radio" id="ingredientsNo" name="ingredients_radio" value="noIngredients" />
                    <label htmlFor="ingredientsNo">No</label>
                </div>
            </div>
            {/* Ingredients input */}
            <div className="row">
                <div className="col-xs-12 col-s-12 col-m-9 col-lg-6">
                    <label htmlFor="ingredientsInput">Ingredients:</label>
                    <input type="text" id="ingredientsInput" name="ingredientsInput" />
                    <div>Separate ingredients with a ','</div>
                </div>
            </div>
        </div>
    );
};