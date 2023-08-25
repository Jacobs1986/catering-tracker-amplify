import React, {
    useContext,
    useState
} from "react";

// CSS File
import "./newItemForm.css";

// Import context
import { NewItemContext } from "./newItemForm";

export default function SizeAndCost() {
    const { sizeInfo, setSizeInfo } = useContext(NewItemContext);
    const [disabled, setDisabled] = useState(true);
    const [sizeRadio, setSizeRadio] = useState("");
    const [numOfSizes, setNumOfSizes] = useState(0);

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
        // Set the newNum value to event.target.value
        let newNum = event.target.value
        // begin the switch statement
        switch (true) {
            // Case where newNum is less than numOfSizes
            case newNum <= numOfSizes: {
                // If true, delete from object
                setSizeInfo({
                    type: 'delete',
                    num: numOfSizes
                })
                break
            }
            // default is blank
            default:
        }
        // set the new number of sizes
        setNumOfSizes(newNum);
    }

    // Handle size inputs
    const handleSizeInput = event => {
        setSizeInfo({
            type: 'add',
            name: event.target.name,
            value: event.target.value
        })
    }

    // Test for generating the same component
    let componentArr = [];
    for (let i = 1; i <= numOfSizes; i++) {
        componentArr.push(
            <div className="col-xs-4 col-s-3 col-m-2 col-lg-2" key={i}>
                <label htmlFor="sizeType">Size Type:</label>
                <input type="text" id="sizeType" name={"sizeType"+i} value={sizeInfo["sizeType"+i] || ""} onChange={handleSizeInput} />
                <label htmlFor="sizeCost">Cost: </label>
                <input type="text" id="sizeCost" name={"sizeCost"+i} value={sizeInfo["sizeCost"+i] || ""} onChange={handleSizeInput} />
            </div>
        )
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
                        {componentArr}
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