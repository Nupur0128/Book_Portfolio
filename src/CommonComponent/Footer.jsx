import React, { useState } from 'react'
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaBook } from "react-icons/fa6";

function Footer() {
    const [email, setEmail] = useState('')

    const handleSubscribe = (e) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log('Subscribed:', email)
        setEmail('')
    }

    return (
        <footer className='bg-gray-800 text-white py-12'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Brand Section */}
                    <div>
                        <div className='flex items-center gap-2 mb-4'>
                            <div className='w-8 h-8 bg-purple-600 rounded flex items-center justify-center'>
                                <FaBook className='text-white' />
                            </div>
                            <h2 className='text-xl font-bold'>One Crore</h2>
                        </div>
                        <p className='text-gray-300 mb-4 text-sm leading-relaxed'>
                            Your practical guide to building wealth smartly. Join thousands of readers who have transformed their financial future.
                        </p>
                        <div className='flex gap-3'>
                            <FaTwitter className='text-gray-400 hover:text-purple-500 cursor-pointer' />
                            <FaLinkedin className='text-gray-400 hover:text-purple-500 cursor-pointer' />
                            <FaInstagram className='text-gray-400 hover:text-purple-500 cursor-pointer' />
                            <FaYoutube className='text-gray-400 hover:text-purple-500 cursor-pointer' />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-2 text-sm'>
                            <li><a href='#' className='text-gray-300 hover:text-purple-500'>Home</a></li>
                            <li><a href='#' className='text-gray-300 hover:text-purple-500'>About the Book</a></li>
                            <li><a href='#' className='text-gray-300 hover:text-purple-500'>Author</a></li>
                            <li><a href='#' className='text-gray-300 hover:text-purple-500'>Chapters</a></li>
                            <li><a href='#' className='text-gray-300 hover:text-purple-500'>Reviews</a></li>
                            <li><a href='#' className='text-gray-300 hover:text-purple-500'>Buy Now</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Contact</h3>
                        <div className='space-y-3 text-sm'>
                            <div className='flex items-center gap-2'>
                                <MdEmail className='text-purple-400' />
                                <span className='text-gray-300'>hello@onecrore.com</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdPhone className='text-purple-400' />
                                <span className='text-gray-300'>+91 98765 43210</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdLocationOn className='text-purple-400' />
                                <span className='text-gray-300'>Mumbai, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Stay Updated</h3>
                        <p className='text-gray-300 text-sm mb-4'>
                            Get free wealth-building tips and updates on new releases.
                        </p>
                        <form onSubmit={handleSubscribe} className='space-y-3'>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email'
                                className='w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-purple-500 focus:outline-none text-sm'
                                required
                            />
                            <button
                                type='submit'
                                className='w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-medium text-sm transition'
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm'>
                    <p className='text-gray-400 mb-4 md:mb-0'>
                        © 2024 How to Make One Crore. All rights reserved.
                    </p>
                    <div className='flex gap-6'>
                        <a href='#' className='text-gray-400 hover:text-white'>Privacy Policy</a>
                        <a href='#' className='text-gray-400 hover:text-white'>Terms of Service</a>
                        <a href='#' className='text-gray-400 hover:text-white'>Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer