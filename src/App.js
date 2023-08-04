import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

// Styling
import './App.css'

// Pages
import Customers from "./pages/page-customers";
import Home from "./pages/page-home";
import Menu from "./pages/page-menu";
import Orders from "./pages/page-order";

// Components
import NavBar from "./components/navBar/navBar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/customers' element={<Customers />} />
                    <Route path='/orders' element={<Orders />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;