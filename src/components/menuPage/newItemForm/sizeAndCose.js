import React, {
    useState
} from "react";

// CSS File
import "./newItemForm.css";

export default function SizeAndCost() {
    const [disabled, setDisabled] = useState(true);
    const [sizeRadio, setSizeRadio] = useState("");
    const [numOfSizes, setNumOfSizes] = useState(6);

    // function to handle the changing of the radio buttons
    const handleToggleSizeRadio = event => {
        // set the switch statement
        switch (event.target.value) {
            // If the yesSize radio is selected enable the input
            case "yesSize": {
                setDisabled(false);
                setSizeRadio(event.target.value);
                break
            }
            // Disable the input
            default:
                setDisabled(true);
                setSizeRadio(event.target.value);
                setNumOfSizes("0");
        }
    }

    // Function that will change the number of sizes
    const handleChangeNumofSizes = event => {
        setNumOfSizes(event.target.value)
    }

    return (
        <div>
            {/* Size radios */}
            <div className="row">
                <div className="col-xs-12">
                    Does this item come in different sizes?
                </div>
                <div className="col-xs-12">
                    <input type="radio" id="sizeYes" name="size_radio" value="yesSize" checked={sizeRadio === "yesSize"} onChange={handleToggleSizeRadio} />
                    <label htmlFor="sizeYes">Yes</label>
                    <input type="radio" id="sizeNo" name="size_radio" value="noSize" checked={sizeRadio === "noSize"} onChange={handleToggleSizeRadio} />
                    <label htmlFor="sizeNo">No</label>
                </div>
            </div>
            {/* if the yes radio is selected */}
            <div className="row">
                <div className="col-xs-12">
                    <label htmlFor="numberOfSizes">Number of Sizes: </label>
                    <input type="number" id="numberOfSizes" name="numberOfSizes" disabled={disabled} value={numOfSizes} onChange={handleChangeNumofSizes} />
                </div>
            </div>
            {/* Size input, the number of them will depend on numberOfSizes input */}
            <div>
                {sizeRadio === "yesSize" ?
                    <div className="row">
                        {Array.from(Array(numOfSizes)).map((x, index) => (<div key={index}>This is a test</div>))}
                        {/* <div className="col-xs-4 col-s-3 col-m-2 col-lg-2">
                            <label htmlFor="sizeType">Size Type:</label>
                            <input type="text" id="sizeType" name="sizeType" />
                            <label htmlFor="sizeCost">Cost: </label>
                            <input type="text" id="sizeCost" name="sizeCost" />
                        </div> */}
                    </div> : sizeRadio === "noSize" ?
                    // If the no radio is selected
                    <div className="row">
                        <div className="col-xs-6 col-s-3 col-m-2 col-lg-2">
                            <label htmlFor="itemCost">Cost: </label>
                            <input type="text" id="itemCost" name="itemCost" />
                        </div>
                    </div> :
                    <div></div>
                }
            </div>
        </div >
    );
};