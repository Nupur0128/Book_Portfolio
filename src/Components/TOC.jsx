import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
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
    <div className='text-center px-4 bg-gradient-to-b from-blue-200 to-white mb-10'>
      <div className="container mx-auto flex flex-col items-center pt-16">
        <h2 className="text-4xl font-semibold mb-10 text-gray-700">What's Inside..?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16 md:mb-0'>
          {
            chapters.map((chap, index) => (
              <div
                key={index}
                className='flex justify-between items-center bg-white p-4 rounded-lg shadow-md cursor-pointer animate-fade-in-up hover-slide-right'
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className='flex items-center'>
                  <span className='text-blue-700 font-bold text-xl mr-4'>{chap.serial}</span>
                  <div className='text-left'>
                    <h3 className='text-xl font-semibold text-gray-800'>{chap.name}</h3>
                    <p className='text-gray-600'>{chap.des}</p>
                  </div>
                </div>
                <IoIosArrowForward className='text-gray-500 font-semibold text-2xl cursor-pointer hover:text-blue-900 transition-colors'/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TOC