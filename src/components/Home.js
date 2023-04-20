import React from 'react';
import Typed from "react-typed";

function Home() {
    return (
        <div className="text-white">
            <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">
                    HI, MY NAME IS
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
                    Chun-Hin Ip.
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-2xl text-xl font-bold py-4 text-gray-300">
                        I'm going to build things for the
                    </p>
                    <Typed
                        className="md:text-5xl sm:text-2xl text-xl font-bold md:pl-4 pl-2"
                        strings={['Internet.', 'Web.', 'Net.']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 px-4">I’m a 2nd year student software
                    developer located at Deltion College in Zwolle. Currently, I’m learning everything about
                    coding..</p>
            </div>
        </div>
    );
}

export default Home;
