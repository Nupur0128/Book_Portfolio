import React, { useState } from 'react'
import { IoCheckmark } from "react-icons/io5";
import '../animations.css';

function BuyNow() {
  const [activeTab, setActiveTab] = useState('monthly')
  
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
    {
      duration: 'Monthly',
      Price: 19.99,
      features: [
        "All Digital Books",
        "50 GB Cloud Storage",
        "Priority Support",
        "3 Device Access",
        "Offline Reading"
      ]
    },
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
    {
      duration: 'Monthly',
      Price: 19.99,
      features: [
        "All Digital Books",
        "50 GB Cloud Storage",
        "Priority Support",
        "3 Device Access",
        "Advanced Reading Tools",
      ]
    },
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
    {
      duration: 'Yearly',
      Price: 199.99,
      features: [
        "All Digital Books",
        "Unlimited Cloud Storage",
        "24/7 Premium Support",
        "Unlimited Device Access",
        "Advanced Reading Tools",
        "Offline Reading",
      ]
    },
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
    {
      duration: 'Yearly',
      Price: 199.99,
      features: [
        "All Digital Books",
        "Unlimited Cloud Storage",
        "24/7 Premium Support",
        "Unlimited Device Access",
        "Advanced Reading Tools",
        "Offline Reading",
      ]
    },
  ]
  return (
    <div className='px-4 py-8 bg-gradient-to-t from-blue-100 to-white w-full bg-white'>
      <h1 className="text-4xl pb-4 text-gray-700 font-semibold text-center">Buy Now</h1>
      <div className='text-center pb-6'>
        <div className='inline-flex bg-blue-100 rounded-full p-1'>
          <button 
            className={`px-6 py-2 rounded-full ${activeTab === 'monthly' ? 'bg-white shadow' : 'bg-transparent'}`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 rounded-full ${activeTab === 'yearly' ? 'bg-white shadow' : 'bg-transparent'}`}
            onClick={() => setActiveTab('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className='container mx-auto gap-8 items-center grid grid-cols-1 md:grid-cols-4'>
        {
          (activeTab === 'monthly' ? monthly : yearly).map((plan, index) => (
            <div
              key={`${activeTab}-${index}`}
              className='mb-2 p-4 border border-gray-300 rounded-lg shadow-sm bg-white cursor-pointer animate-fade-in-up hover-scale'
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Premium {plan.duration}</h3>
              <p className='text-yellow-600 mb-2'>${plan.Price}/{activeTab === 'monthly' ? 'month' : 'year'}</p>
              <ul className='text-gray-600 mb-4'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-center'>
                    <IoCheckmark className='mr-2 text-green-500' />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className='w-full py-2 px-4 rounded-lg bg-blue-100 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group'>
                <span className='group-hover:hidden'>Choose a Plan</span>
                <span className='hidden group-hover:inline'>Start 7-day Free Trial</span>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BuyNow