import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './viwes/HomeView';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView/>} />
        </Routes>
    </BrowserRouter>

    )
}

export default App