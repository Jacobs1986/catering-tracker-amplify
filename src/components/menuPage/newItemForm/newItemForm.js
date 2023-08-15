import React, {
    useReducer,
    useState
} from "react";

// CSS File
import "./newItemForm.css";

// Import the reducer
import { reducer as newMenuItemReducer } from "../../../functions/reducer";

// Import components
import MainItemForm from "./mainItemForm";
import AddonItemForm from "./addonItemForm";

export default function NewItemForm() {
    const [radioCheck, setRadioCheck] = useState("");
    // reducer
    const [newItemInfo, setNewItemInfo] = useReducer(newMenuItemReducer, {});
    // state for showing error message
    const [showMessage, setShowMessage] = useState('none')

    // Function that will show the different forms
    const handleShowForm = (event) => {
        setRadioCheck(event.target.value)
        setNewItemInfo({
            type: 'added',
            name: 'itemType',
            value: event.target.value
        })
    }

    const handleSaveInfo = event => {
        event.preventDefault();
        // Check to see if there is a raido value
        switch (radioCheck) {
            case "": {
                setShowMessage('block')
                break
            }
            default:
                console.log(newItemInfo);
                setShowMessage('none');
        }
    }

    return (
        <div>
            {/* Button that will show the form */}
            <button>Add New Item</button>
            {/* New Item form */}
            <form className="formNewItem">
                <div className="row">
                    {/* Radio buttons that will show either a main item form or add on form */}
                    <div className="col-xs-12">
                        Is this a main item or an add on?
                    </div>
                    <div className="col-xs-12">
                        <input type="radio" id="mainItem" name="item_type" value="main" checked={radioCheck === "main"} onChange={handleShowForm} />
                        <label htmlFor="mainItem">Main Item</label>
                        <input type="radio" id="addOn" name="item_type" value="addOn" checked={radioCheck === "addOn"} onChange={handleShowForm} />
                        <label htmlFor="addOn">Add-on</label>
                    </div>
                </div>
                {/* The forms */}
                <div>
                    {radioCheck === "main" ?
                        <MainItemForm /> :
                        radioCheck === "addOn" ?
                            <AddonItemForm /> :
                            <div></div>
                    }
                </div>
                <div className="errorMessage" style={{ display: showMessage }}>
                    You must select an item type in order to continue.
                </div>
                {/* Buttons */}
                <div className="row">
                    <button onClick={handleSaveInfo}>Save & Add Another</button>
                    <button>Save & Close</button>
                    <button>Close</button>
                </div>
            </form>
        </div>
    );
};