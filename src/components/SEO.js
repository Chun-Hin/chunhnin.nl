import React from 'react';

function Seo() {
    return (
        <div className="w-full bg-white py-16 px-4 scroll-mt-20" id="Seo">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold text-lg">SEO Features</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Belangrijkste SEO Kenmerken</h1>
                    <p className="text-gray-700 mb-4 py-2">
                        I did some research on SEO (Search Engine Optimization). The use of SEO on your website can influence the findability of your website via search engines. Below I have in my opinion, the 10 most important SEO features, the top 5 of which I have also applied on this website.
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="text-gray-800"><strong>Page interaction:</strong> You can add elements to your website, such as buttons or forms, to get the user more involved with your website.</li>
                        <li className="text-gray-800"><strong>Alt tags:</strong> You can use alt tags so that an image has a description that the search engine can recognize.</li>
                        <li className="text-gray-800"><strong>Mobile Optimization:</strong> Make sure the user can use it on any device, so that your website can rank higher on a phone, for example.</li>
                        <li className="text-gray-800"><strong>Use Images:</strong> The use of images can make your website more user-friendly.</li>
                        <li className="text-gray-800"><strong>Social Media:</strong> Using social media to promote your website and attract more users.</li>
                        <li className="text-gray-800"><strong>Title tags:</strong> Title tags can often be recognised by search engines.</li>
                        <li className="text-gray-800"><strong>Keywords:</strong> Keywords are words that the search engine can use as a reference to search for a specific word topic.</li>
                        <li className="text-gray-800"><strong>SSL certificate:</strong> You can secure your website with an SSL certificate, which ensures that your website is more reliable and secure.</li>
                        <li className="text-gray-800"><strong>Content Updates:</strong> Constantly updating and maintaining your content ensures that your website remains relevant and current.</li>
                        <li className="text-gray-800"><strong>Backlinks:</strong> Link to your website that you place on other sites to distribute your website as best as possible.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Seo;
