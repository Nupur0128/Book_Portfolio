import { MdMenuBook, MdLibraryBooks, MdOutlineReviews } from "react-icons/md"
import { FaStar, FaUser } from "react-icons/fa"
import { ImPriceTag } from "react-icons/im"
import '../animations.css'

function KeyHighlights() {

  const highlights = [
    { icon: <MdMenuBook />, name: 'About' },
    { icon: <FaStar />, name: 'Highlights' },
    { icon: <FaUser />, name: 'Author' },
    { icon: <MdLibraryBooks />, name: 'Chapters' },
    { icon: <MdOutlineReviews />, name: 'Reviews' },
    { icon: <ImPriceTag />, name: 'Pricing' }
  ]

  return (
    <div className='flex items-center justify-center overflow-hidden' style={{ background: 'linear-gradient(to left, #05080eff, #1e1b4b, #191595ff)' }}>
      <div className='container mx-auto px-4 mt-2 z-10'>
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
  )
}

export default KeyHighlights