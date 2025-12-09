import bookImg from '../assets/images/book-img.png'
import About from './About'
import Author from './Author'
import TOC from './TOC'
import Review from './Review'
import BuyNow from './BuyNow'
import { useEffect, useState } from 'react'
import '../animations.css'
//icon imports
import { ImPriceTag } from "react-icons/im";
import { MdMenuBook } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";

function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const highlights = [
    { icon: <MdMenuBook />, name: 'About' },
    { icon: <FaStar />, name: 'Highlights' },
    { icon: <FaUser />, name: 'Author' },
    { icon: <MdLibraryBooks />, name: 'Chapters' },
    { icon: <MdOutlineReviews />, name: 'Reviews' },
    { icon: <ImPriceTag />, name: 'Pricing' }
  ]

  return (
    <div id="home">
      <div className='min-h-screen pt-4 md:pt-16 flex items-center justify-center bg-gradient-to-b from-blue-100 to-white'>
        <div className='container mx-auto px-4 mt-32'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='flex justify-center'>
              <img src={bookImg} alt='The Silent Voyager' className='max-w-full h-auto' />
            </div>
            <div className='text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl font-bold text-blue-700 mb-4'>
                <span className='animate-typewriter'>
                  How to Make 1 Crore
                </span>
              </h1>
              <p className='text-lg text-black mb-4'>By Author Name</p>
              <p className='text-gray-600 mb-8 leading-relaxed'>Your definitive guide to mastering personal finance and building wealth.</p>
              <div className='space-y-4'>
                <button className='w-full md:w-auto bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors'>Buy Now</button>
                <button className='w-full md:w-auto border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition-colors ml-0 md:ml-4'>Read Sample</button>
              </div>
            </div>
          </div>

          {/* key highlights */}
          <div className='mt-20 mb-8'>
            <h1 className='text-4xl text-gray-700 font-semibold text-center'>Table of Contents</h1>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-3 gap-8'>
              {
                highlights.map((item, index) => (
                  <div
                    key={index}
                    className='p-6 rounded-lg flex flex-col items-center bg-blue-100 cursor-pointer animate-fade-in-up hover-lift transition-all duration-300'
                    style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    <div className='text-blue-700 mb-4 text-4xl icon-pulse transition-transform duration-300'>{item.icon}</div>
                    <h3 className='text-md text-gray-800 font-medium'>{item.name}</h3>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div id="about"><About /></div>
      <div id="author"><Author /></div>
      <div id="toc"><TOC /></div>
      <div id="reviews"><Review /></div>
      <div id="buynow"><BuyNow /></div>
    </div>
  )
}

export default Home