import bookImg from '../assets/images/book-img.png'
import About from './About'
import Author from './Author'
import TOC from './TOC'
import Review from './Review'
import BuyNow from './BuyNow'
import { useEffect, useState } from 'react'
import '../animations.css'
import { FaBook } from "react-icons/fa"
//icon imports
import { ImPriceTag } from "react-icons/im";
import { MdMenuBook } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";

function Home() {
  const [visible, setVisible] = useState(false)
  const [lines, setLines] = useState([])

  useEffect(() => {
    setVisible(true)
    const newLines = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      color: i % 2 === 0 ? 'rgba(139, 92, 246, 0.6)' : 'rgba(59, 130, 246, 0.6)'
    }))
    setLines(newLines)
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
      <div className='relative min-h-screen pt-4 md:pt-16 flex items-center justify-center overflow-hidden' style={{ background: 'linear-gradient(to bottom, #0f172a, #1e1b4b, #312e81)' }}>
        <style>{`
          @keyframes floatLine {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
            25% { transform: translate(30px, -50px) rotate(5deg); opacity: 0.8; }
            50% { transform: translate(-20px, -100px) rotate(-3deg); opacity: 0.6; }
            75% { transform: translate(40px, -70px) rotate(4deg); opacity: 0.7; }
          }
          .floating-line {
            position: absolute;
            width: 400px;
            height: 3px;
            border-radius: 2px;
            filter: blur(1px);
            box-shadow: 0 0 20px currentColor;
            animation: floatLine var(--duration) ease-in-out infinite;
          }
        `}</style>
        <svg className='absolute inset-0 w-full h-full pointer-events-none'>
          {lines.map(line => (
            <line
              key={line.id}
              className='floating-line'
              x1={`${line.startX}%`}
              y1={`${line.startY}%`}
              x2={`${line.endX}%`}
              y2={`${line.endY}%`}
              stroke={line.color}
              strokeWidth='3'
              strokeLinecap='round'
              style={{
                '--duration': `${line.duration}s`,
                animationDelay: `${line.delay}s`,
                filter: 'drop-shadow(0 0 10px currentColor)'
              }}
            />
          ))}
        </svg>
        <div className='container mx-auto px-4 mt-32 z-10'>
          {/* hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='flex justify-center'>
              <img src={bookImg} alt='The Silent Voyager' className='max-w-full h-auto' />
            </div>
            <div className='text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg'>
                <span className='animate-typewriter'>
                  How to Make 1 Crore
                </span>
              </h1>
              <p className='text-white mb-4 drop-shadow-md'>By Author Name</p>
              <p className='text-gray-200 mb-8 leading-relaxed drop-shadow-md'>Your definitive guide to mastering personal finance and building wealth.</p>
              <div className='space-y-4'>
                <button className='w-full md:w-auto bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition shadow-lg'>Buy Now</button>
                <button className='w-full md:w-auto border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition ml-0 md:ml-4 shadow-lg'>Read Sample</button>
              </div>
            </div>
          </div>

          {/* key highlights */}
          <div className='mt-20 mb-8'>
            <h1 className='text-4xl text-white font-semibold text-center drop-shadow-lg'>Table of Contents</h1>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-3 gap-8'>
              {
                highlights.map((item, index) => (
                  <div
                    key={index}
                    className='p-6 rounded-lg flex flex-col items-center bg-white/10 backdrop-blur-md cursor-pointer animate-fade-in-up hover-lift transition border border-white/20 shadow-xl'
                    style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    <div className='text-white mb-4 text-4xl icon-pulse drop-shadow-lg'>{item.icon}</div>
                    <h3 className='text-white font-semibold drop-shadow-md'>{item.name}</h3>
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