import menImg from '../images/hero-author.png'
import About from './About'
import Author from './Author'
import TOC from './TOC'
import Review from './Review'
import BuyNow from './BuyNow'
// import '../animations.css'

import '../commonCSS/button.css'
import KeyHighlights from './KeyHighlights'

function Home() {

  return (
    <div id="home" className='bg-gradient-to-br from-purple-100 via-white to-purple-50 mt-16'>
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
          <div className='container px-6 py-8 z-10'>
            {/* hero section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              
              <div className='text-left space-y-6'>
                {/* Bestselling Badge */}
                <div className='inline-flex items-center bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium'>
                  <span className='text-yellow-500 mr-2'>⭐</span>
                  Bestselling Financial Guide
                </div>
                
                {/* Main Heading */}
                <div className='space-y-2'>
                  <h1 className='font-serif text-2xl lg:text-5xl font-bold text-gray-800 leading-tight'>
                    Your Practical Guide
                  </h1>
                  <h2 className='font-serif text-2xl lg:text-5xl font-bold text-purple-400 leading-tight'>
                    to Building Wealth
                  </h2>
                  <h3 className='font-serif text-2xl lg:text-5xl font-bold text-yellow-500 leading-tight'>
                    Smartly
                  </h3>
                </div>
                
                {/* Description */}
                <p className='text-gray-600 text-lg leading-relaxed max-w-lg'>
                  Discover proven strategies and actionable insights to transform your financial future. Learn the secrets that separate the wealthy from the rest.
                </p>
                
                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button className='bounce-top bg-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-purple-700 transition shadow-lg flex items-center justify-center'>
                    Buy Now
                    <span className='ml-2'>→</span>
                  </button>
                  <button className='bounce-bottom border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-purple-500 hover:bg-gray-50 transition'>
                    Read Preview
                  </button>
                </div>
                
                {/* Statistics */}
                <div className='flex gap-8 pt-4'>
                  <div>
                    <div className='font-serif text-3xl font-bold text-gray-800'>50K+</div>
                    <div className='font-serif text-gray-600 text-sm'>Copies Sold</div>
                  </div>
                  <div>
                    <div className='font-serif text-3xl font-bold text-gray-800'>4.9</div>
                    <div className='font-serif text-gray-600 text-sm'>Reader Rating</div>
                  </div>
                  <div>
                    <div className='font-serif text-3xl font-bold text-gray-800'>12</div>
                    <div className='font-serif text-gray-600 text-sm'>Countries</div>
                  </div>
                </div>
              </div>
              
              {/* Image section */}
              <div className='relative flex justify-center lg:justify-end'>
                <div className='relative'>
                  <img 
                    src={menImg} 
                    alt='Financial Guide Author' 
                    className='w-full max-w-md lg:max-w-md h-auto rounded-2xl shadow-xl shadow-purple-400'
                  />
                  
                  {/* Price Tag */}
                  <div className='absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-2xl shadow-lg'>
                    <div className='flex items-center space-x-2'>
                      <span className='text-2xl text-black bg-yellow-400 rounded-md'>🏷️</span>
                      <div>
                        <div className='font-bold text-lg'>₹499</div>
                        <div className='text-xs'>Special Price</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* <KeyHighlights /> */}
      <div id="about"><About /></div>
      <div id="author"><Author /></div>
      <div id="toc"><TOC /></div>
      <div id="reviews"><Review /></div>
      <div id="buynow"><BuyNow /></div>
    </div>
  )
}

export default Home