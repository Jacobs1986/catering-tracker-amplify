import React, {
    useContext,
    useState
} from "react";

// CSS File
import "./toggleCustomerView.css";

// Import context
import { SetView as SetViewToggle } from "../../../pages/page-customers";

export default function ToggleView() {
    const { setToggleView } = useContext(SetViewToggle);
    const [radioCheck, setRadioCheck] = useState("cards")

    // Handle toggling the view
    const handleChangeView = event => {
        // Change the raido check
        setRadioCheck(event.target.value)
        setToggleView(event.target.value);
    }

    return (
        <div className="row">
            <div className="col-xs-5">
                <p style={{margin: "0px"}}>Toggle customer list:</p>
            </div>
            <div className="col-xs-5">
                <form className="toggleForm">
                    <input type="radio" id="Cards" name="toggle_View" value="cards"  checked={radioCheck === "cards" } onChange={handleChangeView} />
                    <label htmlFor="Cards">Cards</label>
                    <input type="radio" id="Table" name="toggle_View" value="table" checked={radioCheck === "table" } onChange={handleChangeView} />
                    <label htmlFor="Table">Table</label>
                </form>
            </div>
        </div>
    );
};