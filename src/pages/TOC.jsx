import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import heroImg from '../assets/images/hero-img.png'
import '../animations.css';

function TOC() {

  const chapters = [
    { serial: '1.', name: 'Introduction', des: 'Understanding the core principle of wealth' },
    { serial: '2.', name: 'The First Principle', des: 'step by step guide' },
    { serial: '3.', name: 'A Deeper Look', des: 'Understanding the core principle of wealth' },
    { serial: '4.', name: 'The Consequence of Actions', des: 'Understanding the core principle of wealth' },
    { serial: '5.', name: 'A New Perspective', des: 'Understanding the core principle of wealth' },
    { serial: '6.', name: 'Finding Balance', des: 'Understanding the core principle of wealth' },
    { serial: '7.', name: 'The Journey Within', des: 'Understanding the core principle of wealth' }
  ]

  return (
    <div className='relative text-center px-4 overflow-hidden' style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='absolute inset-0 bg-black/60 z-0'></div>
      <div className="container mx-auto flex flex-col items-center pt-16 pb-16 relative z-10">
        <h2 className="text-4xl font-semibold mb-10 text-white drop-shadow-2xl">What's Inside..?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16 md:mb-0'>
          {
            chapters.map((chap, index) => (
              <div
                key={index}
                className='flex justify-between items-center bg-black/40 backdrop-blur-md border border-white/30 p-4 rounded-lg shadow-2xl cursor-pointer animate-fade-in-up hover-slide-right hover:bg-black/50 transition-all'
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className='flex items-center'>
                  <span className='text-white font-bold text-xl mr-4'>{chap.serial}</span>
                  <div className='text-left'>
                    <h3 className='text-xl font-semibold text-white drop-shadow-lg'>{chap.name}</h3>
                    <p className='text-gray-200 drop-shadow-md'>{chap.des}</p>
                  </div>
                </div>
                <IoIosArrowForward
                  className='text-gray-300 text-2xl hover:text-purple-400 transition-colors'
                  onClick={() => scrollToSection('buynow')}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TOC