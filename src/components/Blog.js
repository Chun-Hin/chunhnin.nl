import React from 'react';

const existingBlog = {
    title: "Mooie website!",
    author: "Daniel Djajengdihardjo",
    date: "29 November, 2023",
    content: `Wow! Ik vind dat je een super mooie website hebt gemaakt! De opmaak is heel mooi en ik vind het ook geweldig dat hij responsive is. Tof dat je dit hebt gemaakt voor je portfolio.`,
};

function BlogTemplate({title, author, date, content}) {
    return (
        <div className="max-w-[700px] mt-8 mx-auto text-center text-white">
            <h2 className="text-4xl font-bold py-4">{title}</h2>
            <p className="text-gray-300">By {author} | {date}</p>
            <div className="text-gray-500 px-4 py-6">{content}</div>
        </div>
    );
}

function BlogForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form className="max-w-[900px] mt-8 mx-auto text-center" onSubmit={handleSubmit}>
            <h2 className="text-4xl font-bold py-4">Write Your Own Blog</h2>
            <div className="mb-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full p-2 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    className="w-full p-2 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <textarea
                    name="content"
                    placeholder="Write your blog here..."
                    className="w-full p-2 border rounded-md"
                />
            </div>
            <button type="submit" className="bg-[#00df9a] text-black p-2 rounded-md">Submit</button>
        </form>
    );
}

function test() {
    return (
        <div className="text-white">
            <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                {/* Display the existing blog using the template */}
                <BlogTemplate {...existingBlog} />

                {/* Add the blog form component */}
                <BlogForm/>
            </div>
        </div>
    );
}

export default test;
