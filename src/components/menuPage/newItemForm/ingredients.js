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
                setRadioControl(event.target.value);
                setDisabled(false);
                break
            }
            // Disable the input box
            default:
                setRadioControl(event.target.value);
                setDisabled(true);
                setNewItemInfo({
                    type: 'delete',
                    name: 'ingredientsInput'
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
                    <input type="text" id="ingredientsInput" name="ingredientsInput" disabled={disabled} value={newItemInfo.ingredientsInput || "" } onChange={handleInputChange} />
                    <div>Separate ingredients with a ','</div>
                </div>
            </div>
        </div>
    );
};