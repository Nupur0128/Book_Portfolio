import React from 'react'
import { IoBulbOutline } from "react-icons/io5";
import { LuTarget } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineSavings } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { FaRegBuilding } from "react-icons/fa";
import { IoShieldHalf } from "react-icons/io5";
import { CiCalculator1 } from "react-icons/ci";
import { FiTrendingUp } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import heroImg from '../images/hero-img.png'
import '../animations.css';
import { FiAward } from "react-icons/fi";

function TOC() {

  const chapters = [
    { 
      id: '01', 
      title: 'The rich mindset', 
      description: 'Transform your thinking about money and success',
      icon: <IoBulbOutline className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '02', 
      title: 'Financial planning', 
      description: 'Create a clear roadmap to your first crore',
      icon: <LuTarget className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    },
    { 
      id: '03', 
      title: 'Debt management', 
      description: 'Strategies to increase your earning potential',
      icon: <FaArrowTrendUp className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '04', 
      title: '7 Source of Income', 
      description: 'Build the foundation of lasting wealth',
      icon: <MdOutlineSavings className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    },
    { 
      id: '05', 
      title: 'How to run business', 
      description: 'Master the basics of growing your money',
      icon: <VscGraph className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '06', 
      title: 'Wealth Creation', 
      description: 'Leverage property for wealth creation',
      icon: <FaRegBuilding className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    },
    { 
      id: '07', 
      title: 'Investments', 
      description: 'Safeguard your wealth for generations',
      icon: <IoShieldHalf className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '08', 
      title: 'Networking', 
      description: 'Keep more of what you earn legally',
      icon: <CiCalculator1 className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    },
    { 
      id: '09', 
      title: 'Leverage ', 
      description: 'From one crore to financial freedom',
      icon: <FiTrendingUp className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '10', 
      title: 'End Goal', 
      description: 'Create lasting wealth for your family',
      icon: <FiAward className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    }
  ]

  return (
    <div className='relative py-16 px-4' style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='absolute inset-0 bg-black/60 z-0'></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">Table of Contents</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">10 Chapters to Your <span className="text-yellow-500">First Crore</span></h2>
          <p className='text-white max-w-2xl mx-auto'>Each chapter is carefully crafted to take you one step closer to your financial goals with actionable strategies and real-world examples.</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {
            chapters.map((chapter, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-purple-500/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`${chapter.bgColor} rounded-2xl p-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {chapter.icon}
                    </div>
                    <span className="text-3xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">{chapter.id}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="inline-block bg-gradient-to-r from-purple-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Chapter {chapter.id}</div>
                    <h3 className="font-serif text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300 leading-tight">{chapter.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{chapter.description}</p>
                  </div>
                  
                  <div className="mt-4 pt-2 border-t border-gray-100">
                    <div className="flex items-center text-purple-500 text-sm font-medium group-hover:text-purple-700 transition-colors duration-300">
                      <span>Read Chapter</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='bg-white rounded-2xl p-6 shadow-lg mt-8 max-w-4xl mx-auto'>
          <div className='flex items-center gap-4'>
            <div className='bg-yellow-500 rounded-xl p-4 text-black flex-shrink-0'>
              <FiAward className="text-3xl" />
            </div>
            <div>
              <h3 className='font-serif text-xl text-gray-800 mb-2'>Bonus: Exclusive Worksheets & Templates</h3>
              <p className='text-gray-600 text-sm'>Get access to financial planning worksheets, investment trackers, and goal-setting templates worth ₹2,999 — absolutely free with your purchase!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TOC