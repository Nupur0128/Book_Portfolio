import React, { useState, useEffect } from 'react'
import { IoCheckmark } from "react-icons/io5";
import '../animations.css';

function BuyNow() {
  const [activeTab, setActiveTab] = useState('monthly')
  const [bits, setBits] = useState([])

  useEffect(() => {
    const newBits = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 4 + Math.random() * 8
    }))
    setBits(newBits)
  }, [])
  
  const monthly = [
    {
      duration: 'Monthly',
      Price: 9.99,
      features: [
        "Digital Book Access",
        "5 GB Cloud Storage",
        "Basic Email Support",
        "Single Device Login",
        "Standard Reading Features"
      ]
    },
    // {
    //   duration: 'Monthly',
    //   Price: 19.99,
    //   features: [
    //     "All Digital Books",
    //     "50 GB Cloud Storage",
    //     "Priority Support",
    //     "3 Device Access",
    //     "Offline Reading"
    //   ]
    // },
    // {
    //   duration: 'Monthly',
    //   Price: 9.99,
    //   features: [
    //     "Digital Book Access",
    //     "5 GB Cloud Storage",
    //     "Basic Email Support",
    //     "Single Device Login",
    //     "Standard Reading Features"
    //   ]
    // },
    // {
    //   duration: 'Monthly',
    //   Price: 19.99,
    //   features: [
    //     "All Digital Books",
    //     "50 GB Cloud Storage",
    //     "Priority Support",
    //     "3 Device Access",
    //     "Advanced Reading Tools",
    //   ]
    // },
  ]
  
  const yearly = [
    {
      duration: 'Yearly',
      Price: 99.99,
      features: [
        "Digital Book Access",
        "10 GB Cloud Storage",
        "Email Support",
        "Single Device Login",
        "Standard Reading Features",
        "2 Months Free"
      ]
    },
    // {
    //   duration: 'Yearly',
    //   Price: 199.99,
    //   features: [
    //     "All Digital Books",
    //     "Unlimited Cloud Storage",
    //     "24/7 Premium Support",
    //     "Unlimited Device Access",
    //     "Advanced Reading Tools",
    //     "Offline Reading",
    //   ]
    // },
    // {
    //   duration: 'Yearly',
    //   Price: 99.99,
    //   features: [
    //     "Digital Book Access",
    //     "10 GB Cloud Storage",
    //     "Email Support",
    //     "Single Device Login",
    //     "Standard Reading Features",
    //     "2 Months Free"
    //   ]
    // },
    // {
    //   duration: 'Yearly',
    //   Price: 199.99,
    //   features: [
    //     "All Digital Books",
    //     "Unlimited Cloud Storage",
    //     "24/7 Premium Support",
    //     "Unlimited Device Access",
    //     "Advanced Reading Tools",
    //     "Offline Reading",
    //   ]
    // },
  ]
  return (
    <div className='relative px-4 py-8 w-full overflow-hidden' style={{ background: 'linear-gradient(to top, #05080eff, #1e1b4b, #191595ff)' }}>
      {/* Animated Background Bits */}
      {bits.map(bit => (
        <div
          key={bit.id}
          className='absolute rounded-full bg-purple-500 opacity-20 animate-float'
          style={{
            left: `${bit.left}%`,
            width: `${bit.size}px`,
            height: `${bit.size}px`,
            animationDelay: `${bit.delay}s`,
            animationDuration: `${bit.duration}s`,
            bottom: '-20px',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
          }}
        />
      ))}
      <h1 className="text-5xl pb-2 text-white font-bold text-center drop-shadow-lg z-10">Buy Now</h1>
      <p className="text-center text-gray-200 pb-6 drop-shadow-md z-10">Start your reading journey today</p>
      <div className='text-center pb-6 z-10'>
        <div className='inline-flex bg-white/10 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/20'>
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'monthly' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' : 'text-gray-200 hover:text-white'}`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'yearly' ? 'bg-gradient-to-r from-blue-400 to-purple-800 text-white shadow-lg' : 'text-gray-200 hover:text-white'}`}
            onClick={() => setActiveTab('yearly')}
          >
            Yearly 🎉
          </button>
        </div>
      </div>
      <div className='container mx-auto gap-8 flex items-center justify-center'>
        {
          (activeTab === 'monthly' ? monthly : yearly).map((plan, index) => (
            <div
              key={`${activeTab}-${index}`}
              className='mb-2 p-6 border-2 border-white/20 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md cursor-pointer animate-fade-in-up hover-scale hover:border-purple-400 transition group'
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >

              <h3 className='text-2xl font-bold text-white mb-3 drop-shadow-lg'>Premium {plan.duration}</h3>
              <p className='text-4xl font-bold text-white mb-1 drop-shadow-md'>${plan.Price}</p>
              <p className='text-sm text-gray-300 mb-4'>per {activeTab === 'monthly' ? 'month' : 'year'}</p>
              <ul className='text-gray-200 mb-6 space-y-2'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-center text-sm'>
                    <IoCheckmark className='mr-2 text-green-500 flex-shrink-0' />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className='w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-400 to-purple-800 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition shadow-md hover:shadow-xl hover:-translate-y-1'>
                Get Started
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BuyNow