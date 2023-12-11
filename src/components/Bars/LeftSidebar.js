import React from "react";

function LeftSidebar() {
    return(
        <>
            <div className="flex left-sidebar bg-000300 w-full md:w-2/12 p-4 md:sticky md:top-0 md:left-0 md:order-first sm:order-last md:h-screen flex-col items-center justify-center text-center sm:px-5">
                <p className="text-gray-500">
                    Dit is mijn portfoliowebsite. Ik heb de website gebouwd met ReactJs en TailwindCSS. Ik heb deze keuze gemaakt omdat ik graag kennis wou maken met React en Tailwind gecombineerd. De website is zo gemaakt dat hij te bezoeken is via desktop maar ook via mobiel.
                </p>
            </div>
        </>
    )
}

export default LeftSidebar;