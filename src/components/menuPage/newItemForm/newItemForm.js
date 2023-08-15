import React, {
    useState
} from "react";

// CSS File
import "./newItemForm.css";

// Import components
import MainItemForm from "./mainItemForm";
import AddonItemForm from "./addonItemForm";

export default function NewItemForm() {
    const [radioCheck, setRadioCheck] = useState("");

    // Function that will show the different forms
    const handleShowForm = (event) => {
        setRadioCheck(event.target.value)
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
                        <input type="radio" id="mainItem" name="item_type" value="mainItem" checked={radioCheck === "mainItem"} onChange={handleShowForm} />
                        <label htmlFor="mainItem">Main Item</label>
                        <input type="radio" id="addOn" name="item_type" value="addOn" checked={radioCheck === "addOn"} onChange={handleShowForm} />
                        <label htmlFor="addOn">Add-on</label>
                    </div>
                </div>
                {/* The forms */}
                <div>
                    {radioCheck === "mainItem" ? 
                        <MainItemForm /> :
                    radioCheck === "addOn" ? 
                        <AddonItemForm /> :
                        <div></div>
                    }
                </div>
            </form>
        </div>
    );
};