import React from "react";

// Styling
import './App.css'

function App() {
    return (
        <div>
            <div className="header">
                <h1>Chania</h1>
            </div>
            <div className="row">
                <div className="col-s-3 col-3">
                    <ul>
                        <li>The Flight</li>
                        <li>The City</li>
                        <li>The Island</li>
                        <li>The Food</li>
                    </ul>
                </div>
                <div className="col-s-9 col-9">
                    <h1>The City</h1>
                    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
                    <p>Resize the browser window to see how the content respond to the resizing.</p>
                </div>
            </div>
        </div>
    );
}

export default App;