import React from 'react';
import cv from '../files/CVCHUN.pdf';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
    return (
            <nav className="sticky top-0">
                <BrowserRouter>
                    <div className="flex items-center justify-between mt-auto bg-white bg-opacity-95">
                        <div>
                            <p className="text-lg m-6">Chun-Hin Ip</p>
                        </div>
                        <div className="flex items-baseline space-x-4 m-6">
                            <Link to="#About" smooth className="text-navgrey font-lato hover:text-secondary px-3 py-2 rounded-md text-base font-medium">About</Link>
                            <Link to="#Contact" smooth className="text-navgrey font-lato hover:text-secondary px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                            <a href={cv} className="text-navgrey font-lato hover:bg-secondary hover:text-white hover:border-white px-3 py-2 rounded-md text-base font-medium border border-navgrey">Resume</a>
                        </div>
                    </div>
                </BrowserRouter>
            </nav>
    );
}
export default Navbar;