import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { FiGift, FiShield, FiTruck, FiCreditCard } from "react-icons/fi";
import bookImg from '../images/book-img.png';
import '../animations.css';

function BuyNow() {
  const features = [
    "All 10 chapters with actionable strategies",
    "Bonus worksheets & templates (₹2,999 value)",
    "Access to exclusive online community",
    "30-day money-back guarantee",
    "Free shipping across India"
  ]

  return (
    <div className='bg-gradient-to-br from-purple-100 via-white to-purple-50 px-4 py-16'>
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center bg-purple-200 text-purple-800 px-6 py-3 rounded-full text-sm font-medium mb-8'>
            Get Your Copy
          </div>
          <h1 className="font-serif text-gray-800 text-3xl md:text-5xl font-semibold mb-4">
            Start Your Journey to <span className="text-yellow-500">One Crore</span>
          </h1>
          <p className='text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12'>
            Invest in yourself today and unlock the secrets to building lasting wealth. Your financial transformation begins with a single step.
          </p>
        </div>

        <div className="max-w-sm mx-auto">
        <div className='bg-white rounded-3xl p-6 shadow-2xl relative'>
          {/* Bestseller Badge */}
          <div className="absolute -top-0 right-0 bg-yellow-400 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
            Bestseller
          </div>

          {/* Book Image */}
          <div className="text-center mb-6">
            <img 
              src={bookImg} 
              alt="How to Make One Crore Book" 
              className="w-40 h-52 mx-auto object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Pricing */}
          <div className="text-center mb-6">
            <div className="font-serif flex items-center justify-center gap-2 mb-2">
              <span className="text-lg text-gray-400 line-through">₹999</span>
              <span className="text-4xl font-bold text-gray-800">₹499</span>
            </div>
            <p className="text-blue-600 text-sm font-medium">Save ₹500 — Limited Time Offer</p>
          </div>

          {/* Features */}
          <ul className='mb-6 space-y-3'>
            {features.map((feature, i) => (
              <li key={i} className='flex items-start text-sm text-gray-700'>
                <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <IoCheckmark className='text-white text-xs' />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          {/* Buy Buttons */}
          <div className="space-y-3 mb-6">
            <button className='w-full py-4 px-6 rounded-xl bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 transition shadow-lg'>
              Buy Now — ₹499
            </button>
            <button className='w-full py-3 px-6 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:border-purple-500 transition flex items-center justify-center gap-2'>
              <FiGift className="text-lg" />
              Buy as Gift
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <FiShield className="text-purple-500" />
              Secure Payment
            </div>
            <div className="flex items-center gap-1">
              <FiTruck className="text-purple-500" />
              Free Shipping
            </div>
          </div>
          
          <div className="text-center mt-3">
            <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
              <FiCreditCard className="text-purple-500" />
              All Cards Accepted
            </div>
          </div>
        </div>
        </div>

        {/* Money-Back Guarantee Box */}
        <div className='bg-purple-100 rounded-2xl p-6 mt-6 text-center max-w-xl mx-auto'>
          <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiShield className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">30-Day Money-Back Guarantee</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you don't find value in this book within 30 days, we'll refund every rupee. No questions asked. Your success is our priority.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BuyNow