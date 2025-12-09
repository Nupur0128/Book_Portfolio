import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:justify-between">
                            <div className="flex shrink-0 items-center">
                                <h1 className="font-bold text-white text-lg drop-shadow-lg">How to make 1 Crore</h1>
                            </div>
                            <div className="hidden sm:block">
                                <div className="flex space-x-4">
                                    <button onClick={() => scrollToSection('home')} className="rounded-md px-3 py-2 font-semibold text-gray-200 hover:bg-purple-500/20 hover:text-white transition">Home</button>
                                    <button onClick={() => scrollToSection('about')} className="rounded-md px-3 py-2 font-semibold text-gray-200 hover:bg-purple-500/20 hover:text-white transition">About</button>
                                    <button onClick={() => scrollToSection('author')} className="rounded-md px-3 py-2 font-semibold text-gray-200 hover:bg-purple-500/20 hover:text-white transition">Author</button>
                                    <button onClick={() => scrollToSection('toc')} className="rounded-md px-3 py-2 font-semibold text-gray-200 hover:bg-purple-500/20 hover:text-white transition">TOC</button>
                                    <button onClick={() => scrollToSection('reviews')} className="rounded-md px-3 py-2 font-semibold text-gray-200 hover:bg-purple-500/20 hover:text-white transition">Reviews</button>
                                    <button onClick={() => scrollToSection('buynow')} className="rounded-md px-3 py-2 font-semibold text-gray-200 hover:bg-purple-500/20 hover:text-white transition">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 z-[60] sm:hidden" onClick={() => setIsOpen(false)}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="absolute left-0 top-0 h-full w-3/4 max-w-xs bg-gray-900 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between px-4 py-4 border-b border-purple-500/20">
                                <h2 className="text-lg font-bold text-white">Menu</h2>
                                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-purple-500/20 rounded text-white transition">
                                    <RxCross2 className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="px-3 pt-4 pb-3 space-y-1">
                                <button className="w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-purple-500/20 hover:text-white font-semibold transition" onClick={() => { scrollToSection('home'); setIsOpen(false); }}>Home</button>
                                <button className="w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-purple-500/20 hover:text-white font-semibold transition" onClick={() => { scrollToSection('about'); setIsOpen(false); }}>About</button>
                                <button className="w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-purple-500/20 hover:text-white font-semibold transition" onClick={() => { scrollToSection('author'); setIsOpen(false); }}>Author</button>
                                <button className="w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-purple-500/20 hover:text-white font-semibold transition" onClick={() => { scrollToSection('toc'); setIsOpen(false); }}>TOC</button>
                                <button className="w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-purple-500/20 hover:text-white font-semibold transition" onClick={() => { scrollToSection('reviews'); setIsOpen(false); }}>Reviews</button>
                                <button className="w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-purple-500/20 hover:text-white font-semibold transition" onClick={() => { scrollToSection('buynow'); setIsOpen(false); }}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar