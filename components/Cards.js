"use client"; // menggunakan component client karena menggunakan onClick

import { FaArrowRight } from "react-icons/fa6";
import tldjs from 'tldjs';

const Cards = ({ title, url, desc, bg_img }) => {
    const domain = tldjs.parse(url).domain;
    return (
        <div className='flex items-center justify-center mt-4'>
            <div className="relative lg:h-[50%] lg:w-[50%] md:h-[100%] md:w-[100%] h-[80%] w-[80%]">
                <img
                    src={bg_img}
                    alt="Netflix Changing Landscape"
                    layout="fill"
                    objectfit="cover"
                    className="rounded-[5%] opacity-65 h-[500%] w-[500%] hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute bottom-1/4 top-[10%] left-[10%] right-[10%] justify-center items-center">
                    <p className="text-xs md:text-sm text-white mb-4">
                        {domain.toUpperCase()}</p>
                    <h1 className="text-xs md:text-xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    <h2 className="text-xs md:text-xl text-white">
                        {desc}
                    </h2>
                    <button onClick={() => window.open(url, '_blank')} className="flex flex-row gap-2 items-center bg-white text-black py-1 px-2 rounded hover:scale-105 transition-transform duration-200 text-xs lg:text-xl lg:mt-3 mt-1">
                        <h1>
                            To the article
                        </h1>
                        <FaArrowRight className="lg:h-5 lg:w-5 h-3 w-3"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;