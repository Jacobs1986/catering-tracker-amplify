import React, {
    useContext,
    useState
} from "react";

// CSS File
import "./newItemForm.css";

// Import context
import { NewItemContext } from "./newItemForm";

export default function Ingredients() {
    const { newItemInfo, handleInputChange, setNewItemInfo } = useContext(NewItemContext);
    const [disabled, setDisabled ] = useState(true);
    const [radioControl, setRadioControl] = useState("");

    // Handle function that will change the state of the radios
    const handleRadioChange = event => {
        //  Begin switch statment
        switch (event.target.value) {
            // Activate the input box
            case "yesIngredients": {
                // Set the radio control
                setRadioControl(event.target.value);
                // enable the input
                setDisabled(false);
                // set ingredients to true
                setNewItemInfo({
                    type: 'add',
                    name: 'ingredients',
                    value: true
                })
                break
            }
            // Disable the input box
            default:
                // set the radio control
                setRadioControl(event.target.value);
                // disable the input
                setDisabled(true);
                // Check to see if there is an ingredientsList
                if (newItemInfo.ingredientsList) {
                    // Delete the list
                    setNewItemInfo({
                        type: 'delete',
                        name: 'ingredientsInput'
                    })
                }
                // set ingredients to false
                setNewItemInfo({
                    type: 'add',
                    name: 'ingredients',
                    value: false
                })
        }
    }

    return (
        <div>
            {/* Ingredients radios */}
            <div className="row">
                <div className="col-xs-12">
                    Does this item have ingredients?
                </div>
                <div className="col-xs-12">
                    {/* Yes radio */}
                    <input type="radio" id="ingredientsYes" name="ingredients_radio" value="yesIngredients" checked={radioControl === "yesIngredients" } onChange={handleRadioChange} />
                    <label htmlFor="ingredientsYes">Yes</label>
                    {/* No Radio */}
                    <input type="radio" id="ingredientsNo" name="ingredients_radio" value="noIngredients" checked={radioControl === "noIngredients"} onChange={handleRadioChange} />
                    <label htmlFor="ingredientsNo">No</label>
                </div>
            </div>
            {/* Ingredients input */}
            <div className="row">
                <div className="col-xs-12 col-s-12 col-m-9 col-lg-6">
                    <label htmlFor="ingredientsInput">Ingredients:</label>
                    <input type="text" id="ingredientsInput" name="ingredientsList" disabled={disabled} value={newItemInfo.ingredientsList || "" } onChange={handleInputChange} />
                    <div>Separate ingredients with a ','</div>
                </div>
            </div>
        </div>
    );
};