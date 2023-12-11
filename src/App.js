import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Bars/Navbar';
import Homepage from './components/Pages/Homepage';
import Blog from './components/Blog';
import SEO from './components/SEO';
import LeftSidebar from "./components/Bars/LeftSidebar";
import RightSidebar from "./components/Bars/RightSidebar";


function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col md:flex-row">
                <LeftSidebar />
                <div className="flex-1">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/blog/*" element={<Blog />} />
                        <Route path="/seo/*" element={<SEO />} />
                    </Routes>
                </div>
                <RightSidebar />
            </div>
        </BrowserRouter>
    );
}

export default App;
