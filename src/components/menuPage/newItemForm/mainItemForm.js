import React from "react";

// CSS File
import "./newItemForm.css";

// Components
import NameAndCategories from "./nameAndCategories";
import Ingredients from "./ingredients";
import SizeAndCost from "./sizeAndCose";
import ItemDescription from "./itemDescription";

export default function MainItemForm() {
    return (
        <div>
            <NameAndCategories />
            <Ingredients />
            <SizeAndCost />
            <ItemDescription />
        </div>
    );
};