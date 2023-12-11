import {SiGithub, SiReact, SiTailwindcss} from "react-icons/si";
import React from "react";

function RightSidebar() {
    return(
        <>
            <div className="right-sidebar bg-000300 w-full md:w-1/12 p-4 md:sticky md:top-0 md:right-0 sm:fixed left-[-500%] h-screen flex flex-col items-center justify-center">
                <a href="https://react.dev/"><SiReact className="text-blue-600 text-7xl mb-2" title="React" /></a>
                <a href="https://tailwindcss.com/"><SiTailwindcss className="text-blue-500 text-7xl mb-2" title="Tailwind CSS" /></a>
                <a href="https://github.com/Chun-Hin"><SiGithub className="text-gray-300 text-7xl mb-2" title="GitHub" /></a>
            </div>
        </>
    )
}

export default RightSidebar;