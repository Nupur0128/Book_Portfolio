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
            <nav className="fixed top-0 left-0 right-0 z-40 shadow-sm bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
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
                                <h1 className="font-bold text-blue-700 text-lg p-2 rounded-full">How to make 1 Crore</h1>
                            </div>
                            <div className="hidden sm:block">
                                <div className="flex space-x-4">
                                    <button onClick={() => scrollToSection('home')} className="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-blue-100">Home</button>
                                    <button onClick={() => scrollToSection('about')} className="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-blue-100">About</button>
                                    <button onClick={() => scrollToSection('author')} className="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-blue-100">Author</button>
                                    <button onClick={() => scrollToSection('toc')} className="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-blue-100">TOC</button>
                                    <button onClick={() => scrollToSection('reviews')} className="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-blue-100">Reviews</button>
                                    <button onClick={() => scrollToSection('buynow')} className="rounded-md px-3 py-2 text-md font-semibold text-black hover:bg-blue-100">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 z-50 sm:hidden" onClick={() => setIsOpen(false)}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                        <div className="absolute left-0 top-0 h-full w-3/4 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between px-4 py-4 border-b">
                                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                                    <RxCross2 className="h-6 w-6" />
                                </button>
                                <h2 className="text-lg font-semibold">Sidebar</h2>
                                <div className="w-8"></div>
                            </div>
                            <div className="space-y-1 px-2 pt-4 pb-3">
                                <button className="block rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-blue-100 w-full text-left" onClick={() => { scrollToSection('home'); setIsOpen(false); }}>Home</button>
                                <button className="block rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-blue-100 w-full text-left" onClick={() => { scrollToSection('about'); setIsOpen(false); }}>About</button>
                                <button className="block rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-blue-100 w-full text-left" onClick={() => { scrollToSection('author'); setIsOpen(false); }}>Author</button>
                                <button className="block rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-blue-100 w-full text-left" onClick={() => { scrollToSection('toc'); setIsOpen(false); }}>TOC</button>
                                <button className="block rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-blue-100 w-full text-left" onClick={() => { scrollToSection('reviews'); setIsOpen(false); }}>Reviews</button>
                                <button className="block rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-blue-100 w-full text-left" onClick={() => { scrollToSection('buynow'); setIsOpen(false); }}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar