import React from 'react';
import languages from '../images/languages.png'
import chunfoto from '../images/chunfoto.JPG'

function About() {
    return (
        <div className="flex justify-around p-5 scroll-mt-32" id="About">
            <div className="mr-6">
                <p className="text-headergrey text-4xl mb-6">About.</p>
                <p className="text-navgrey text-base mb-2 w-96">My name is Chun-Hin and I am 17 years old. I study at the Deltion college in Zwolle and I do the <span className="text-secondary"> MBO software development level 4. </span></p>
                <p className="text-navgrey text-base mb-2 w-96">Some of my qualities and skills are: speaking <span className="text-secondary">fluent Dutch </span> and English, helping and learning other people and being open to new things.</p>
                <p className="text-navgrey text-base mb-10 w-96">I expect that after this training I have acquired a lot of knowledge and skills of the software development profession and that I can further develop myself in this field.</p>
                <p className="text-headergrey text-2xl mb-6">Languages i work with</p>
                <img className="h-28" src={languages}/>
            </div>
            <div>
                <img className="h-124 rounded-lg ml-6" src={chunfoto}/>
            </div>
        </div>
    );
}
export default About;