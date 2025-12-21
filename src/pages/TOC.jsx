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
      title: 'The Wealth Mindset', 
      description: 'Transform your thinking about money and success',
      icon: <IoBulbOutline className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '02', 
      title: 'Setting Financial Goals', 
      description: 'Create a clear roadmap to your first crore',
      icon: <LuTarget className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    },
    { 
      id: '03', 
      title: 'Income Multiplication', 
      description: 'Strategies to increase your earning potential',
      icon: <FaArrowTrendUp className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '04', 
      title: 'Smart Saving Habits', 
      description: 'Build the foundation of lasting wealth',
      icon: <MdOutlineSavings className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    },
    { 
      id: '05', 
      title: 'Investment Fundamentals', 
      description: 'Master the basics of growing your money',
      icon: <VscGraph className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '06', 
      title: 'Real Estate Secrets', 
      description: 'Leverage property for wealth creation',
      icon: <FaRegBuilding className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    },
    { 
      id: '07', 
      title: 'Risk & Protection', 
      description: 'Safeguard your wealth for generations',
      icon: <IoShieldHalf className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '08', 
      title: 'Tax Optimization', 
      description: 'Keep more of what you earn legally',
      icon: <CiCalculator1 className="text-2xl" />,
      bgColor: 'bg-yellow-500'
    },
    { 
      id: '09', 
      title: 'Scaling Your Wealth', 
      description: 'From one crore to financial freedom',
      icon: <FiTrendingUp className="text-2xl" />,
      bgColor: 'bg-purple-500'
    },
    { 
      id: '10', 
      title: 'Legacy Planning', 
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
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto'>
          {
            chapters.map((chapter, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group'
              >
                <div className='flex items-center gap-3'>
                  <div className={`${chapter.bgColor} rounded-xl p-3 text-white flex-shrink-0`}>
                    {chapter.icon}
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm text-purple-500 font-medium mb-1 bg-purple-100 px-2 py-1 rounded-full inline-block'>Chapter {chapter.id}</div>
                    <h3 className='font-serif text-md text-gray-800 mb-1'>{chapter.title}</h3>
                    <p className='text-gray-600 text-sm'>{chapter.description}</p>
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