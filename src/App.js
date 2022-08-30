import React from "react";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/signin" element={<SignInPage />} exact />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
