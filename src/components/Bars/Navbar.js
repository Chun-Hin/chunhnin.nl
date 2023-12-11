import React, { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import cv from "../../files/ChunCV.pdf";

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center h-24 max-w mx-auto px-8 text-white sticky top-0 bg-[#000300] opacity-90">
            <a href="/"><h1 className="w-full text-3xl font-bold text-[#00df9a]">CHUNHIN.</h1></a>
            <ul className="hidden md:flex">
                <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                    <Link to="#About" smooth>About</Link>
                </li>
                <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                    <Link to="#Contact" smooth>Contact</Link>
                </li>
                <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                    <RouterLink to="/blog">Blog</RouterLink>
                </li>
                <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                    <a href={cv}>Resume</a>
                </li>
                <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                    <RouterLink to="/seo">SEO</RouterLink>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden" : "fixed left-[-100%] "}>
                <ul className="uppercase p-4">
                    <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                        <Link to="#About" smooth>About</Link>
                    </li>
                    <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                        <Link to="#Contact" smooth>Contact</Link>
                    </li>
                    <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                        <RouterLink to="/blog">Blog</RouterLink>
                    </li>
                    <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                        <a href={cv}>Resume</a>
                    </li>
                    <li className="p-4 hover:text-[#00df9a] hover:cursor-pointer">
                        <RouterLink to="/seo">SEO</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
