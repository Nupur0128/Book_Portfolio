import { useEffect, useState } from 'react';
import { IoIosBulb } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import { PiMedalLight } from "react-icons/pi";
import '../animations.css';

function About() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 3 + Math.random() * 6
    }))
    setParticles(newParticles)
  }, [])

  const cards = [
    {
      title: 'Clear Roadmap',
      description: 'Step-by-step guidance from where you are now to your first crore.',
      icon: <FiTarget/>
    },
    {
      title: 'Practical Strategies',
      description: 'Real-world tactics that work in today\'s economy, not outdated advice.',
      icon: <IoIosBulb/>
    },
    {
      title: 'Investment Secrets',
      description: 'Learn how to make your money work harder than you do.',
      icon: <FaArrowTrendUp/>
    },
    {
      title: 'Risk Management',
      description: 'Protect your wealth while growing it with smart diversification.',
      icon: <FaShieldAlt/>
    },
    {
      title: 'Success Stories',
      description: 'Real examples of people who followed this path to financial freedom.',
      icon: <FaPeopleRobbery/>
    },
    {
      title: 'Proven Results',
      description: 'Backed by research and thousands of success stories worldwide.',
      icon: <PiMedalLight/>
    }
  ]

  return (
    <div className='relative bg-[#F5F3F2] min-h-screen flex justify-center items-center overflow-hidden'>
      {particles.map(p => (
        <div
          key={p.id}
          className='absolute rounded-full bg-purple-500 opacity-10 animate-float'
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            bottom: '-20px',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
          }}
        />
      ))}
      <div className='container mx-auto w-full mt-20 z-10 px-8'>
        <div className='text-center mb-16 items-center'>
          <div className='inline-flex items-center bg-purple-200 text-purple-800 px-6 py-3 rounded-full text-sm font-medium mb-8'>
            About the Book
          </div>
          <h1 className="font-serif text-gray-800 text-4xl md:text-5xl font-semibold mb-6">
            Why This Book Will <span className="text-purple-500">Change Your</span>
            <br />
            <span className="text-purple-500">Life</span>
          </h1>
          <p className='text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12'>
            "How to Make One Crore" isn't just another finance book. It's a comprehensive blueprint designed specifically for ambitious individuals who are ready to take control of their financial destiny.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'>
          {cards.map((card, index) => (
            <div key={index} className='bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-400 border border-gray-100'>
              <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg'>
                <div className='text-white text-xl'>{card.icon}</div>
              </div>
              <h3 className='font-serif text-xl font-medium text-gray-800 mb-1'>{card.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Who Is This Book For Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 bg-gray-50 p-8 rounded-2xl'>
          <div>
            <h2 className='font-serif text-3xl font-bold text-gray-800 mb-6'>Who Is This Book For?</h2>
            <p className='text-gray-600 mb-6'>This book is perfect for anyone who believes they can achieve more but needs the right guidance to get there.</p>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'/>
                  </svg>
                </div>
                <span className='text-gray-700'>Young professionals starting their wealth journey</span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'/>
                  </svg>
                </div>
                <span className='text-gray-700'>Entrepreneurs looking to scale their income</span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'/>
                  </svg>
                </div>
                <span className='text-gray-700'>Anyone tired of living paycheck to paycheck</span>
              </div>
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'/>
                  </svg>
                </div>
                <span className='text-gray-700'>Investors seeking smarter strategies</span>
              </div>
            </div>
          </div>
          
          <div className='bg-gray-200 p-4 rounded-xl'>
            <p className='text-black italic text-lg mb-3'>"The principles in this book helped me go from ₹50,000 savings to my first crore in just 4 years."</p>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3'>
                <span className='text-white font-bold'>P</span>
              </div>
              <div>
                <div className='font-semibold text-gray-800'>Priya Sharma</div>
                <div className='text-gray-600 text-sm'>Software Engineer, Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About