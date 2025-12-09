import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import '../animations.css';

function TOC() {
  const [waves, setWaves] = useState([])

  useEffect(() => {
    const newWaves = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 4,
      size: 25 + Math.random() * 35
    }))
    setWaves(newWaves)
  }, [])

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
    <div className='relative text-center px-4 overflow-hidden' style={{ background: 'linear-gradient(to bottom, #312e81, #1e1b4b, #0f172a)' }}>
      {waves.map(wave => (
        <MdMenuBook
          key={wave.id}
          className='absolute text-blue-400 opacity-20 animate-float'
          style={{
            left: `${wave.left}%`,
            fontSize: `${wave.size}px`,
            animationDelay: `${wave.delay}s`,
            animationDuration: `${wave.duration}s`,
            bottom: '-30px',
            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'
          }}
        />
      ))}
      <div className="container mx-auto flex flex-col items-center pt-16 z-10">
        <h2 className="text-4xl font-semibold mb-10 text-white drop-shadow-lg">What's Inside..?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16 md:mb-0'>
          {
            chapters.map((chap, index) => (
              <div
                key={index}
                className='flex fy-between items-center bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-2xl cursor-pointer animate-fade-in-up hover-slide-right'
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className='flex items-center'>
                  <span className='text-purple-400 font-bold text-xl mr-4'>{chap.serial}</span>
                  <div className='text-left'>
                    <h3 className='text-xl font-semibold text-white drop-shadow-md'>{chap.name}</h3>
                    <p className='text-gray-300 drop-shadow-sm'>{chap.des}</p>
                  </div>
                </div>
                <IoIosArrowForward className='text-gray-300 text-2xl hover:text-purple-400 transition-colors'/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TOC