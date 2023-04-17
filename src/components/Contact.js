import React from "react";

function Contact() {
    return(
        <div className="flex justify-center" id="Contact">
            <div className="break-normal text-center align-super">
                <p className="text-headergrey text-5xl mb-3">Contact.</p>
                <p className="text-navgrey text-lg w-104 mb-4">You can always contact my by sending me an <span className="text-secondary">e-mail</span>. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <a className="text-navgrey font-lato hover:bg-secondary hover:text-white hover:border-white px-5 py-3 rounded-md text-base font-medium border border-navgrey" href="mailto:chunhin.ip05@gmail.com">Say hello</a>
            </div>
        </div>
    );
}

export default Contact