// components/Layout.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Variabel animasi
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: '-10%',
        },
        visible: {
            opacity: 1,
            y: '0%',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
                staggerChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            y: '-10%',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: 0 },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <nav className="bg-[#612222] text-slate-100 p-4 sm:p-6 md:flex md:justify-between md:items-center z-[9999]">
            <div className="container mx-auto flex justify-between items-center" id="navbarNav">
                <a className='text-2xl font-bold'>Raka Arfi</a>

                {/* Navbar Desktop */}
                <div className="hidden md:flex">
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                    <Link key={index} className="mx-2 hover:text-gray-300" href={`#${item.toLowerCase()}`}>
                        {item}
                    </Link>
                ))}

                </div>

                {/* Navbar Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <b>{isOpen ? 'X' : '☰'}</b>
                    </button>
                    <AnimatePresence >
                    {/* Animated Menu */}
                    {isOpen && (
                        <motion.div
                            className="absolute top-16 right-0 w-full bg-[#612222] text-slate-100 p-4 border-t border-gray-300 py-2"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                        >
                            <ul>
                                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                    >
                                        <a href={`#${item.toLowerCase()}`} className="block py-2">
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};
