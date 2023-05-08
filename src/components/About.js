import React from 'react';
import chunfoto from '../images/chunfoto.JPG'
import languages from '../images/languages.JPG'

function About() {
    return (
        <div className="w-full bg-white py-16 px-4 scroll-mt-20" id="About">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[450px] mx-auto my-4 rounded-lg" src={chunfoto} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">ABOUT.</p>
                    <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold py-2">Something about myself</h1>
                    <p className="py-2">
                        My name is Chun-Hin and I am 17 years old. I study Software Development (Level 4) at the Deltion college in Zwolle.
                    </p>
                    <p className="py-2">
                        Some of my qualities and skills are: speaking fluent Dutch and English, helping and learning other people and being open to new things.
                    </p>
                    <p className="py-2 pb-4">
                        I expect that after this training I have acquired a lot of knowledge and skills of the software development profession and that I can further develop myself in this field.
                    </p>
                    <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold pt-6">Languages i work with</h1>
                    <img className="w-[825px] mx-auto my-4 rounded-lg" src={languages} alt="/" />
                </div>
            </div>
        </div>
    );
}
export default About;