import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className="top-0 bg-gray-100 z-50 left-0 right-0 py-10">
                <div className='max-w-[1110px] mx-auto flex justify-between items-center p-4 sticky '>
                {/* Logo */}
                <div className="logoBox">
                    <img src="https://themewagon.github.io/simple/images/Group2.svg" alt="logo" className="logoImg w-24 sm:w-28" />
                </div>

                {/* Menu Button for Mobile */}
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Menu Links */}
                <div className="hidden sm:flex justify-evenly items-center gap-8">
                    <button className='font-semibold text-black hover:text-red-500 cursor-pointer transition-all duration-300 p-3'>Home</button>
                    <button className='font-semibold text-black hover:text-red-500 cursor-pointer transition-all duration-300 p-3'>About</button>
                    <button className='font-semibold text-black hover:text-red-500 cursor-pointer transition-all duration-300 p-3'>Blog</button>
                    <button className='font-semibold text-black hover:text-red-500 cursor-pointer transition-all duration-300 p-3'>Testimonials</button>
                </div>

                {/* Contact Us Button */}
                <div className="hidden sm:flex navButtons">
                    <button className="bg-[#1998ff] text-white px-4 py-2 hover:bg-transparent hover:text-[#1998ff] border border-[#1998ff] cursor-pointer transition-all duration-300"
                    >Contact Us</button>
                </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <>
                    {/* Fullscreen Menu */}
                    <div className="fixed inset-0 bg-gray-100 flex flex-col justify-center items-center gap-6 z-50 overflow-hidden">
                        <button className='font-semibold text-black text-xl hover:text-red-500 cursor-pointer transition-all duration-300'>Home</button>
                        <button className='font-semibold text-black text-xl hover:text-red-500 cursor-pointer transition-all duration-300'>About</button>
                        <button className='font-semibold text-black text-xl hover:text-red-500 cursor-pointer transition-all duration-300'>Blog</button>
                        <button className='font-semibold text-black text-xl hover:text-red-500 cursor-pointer transition-all duration-300'>Testimonials</button>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-sm hover:bg-transparent hover:text-blue-500 border border-blue-500 cursor-pointer transition-all duration-300"
                        >Contact Us</button>
                    </div>

                    {/* Cross Icon (X) - Now Visible */}
                    <button 
                        onClick={toggleMobileMenu} 
                        className="fixed top-4 right-4 text-black z-50 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    {/* Background Overlay */}
                    <div 
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={toggleMobileMenu}
                    ></div>
                </>
            )}
        </>
    )
}

export default Navbar;
