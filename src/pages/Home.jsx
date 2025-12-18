import girlImg from '../assets/images/mern-outbg.png'
import About from './About'
import Author from './Author'
import TOC from './TOC'
import Review from './Review'
import BuyNow from './BuyNow'
import '../animations.css'
import DarkVeil from './DarkVeil';


import '../commonCSS/button.css'
import KeyHighlights from './KeyHighlights'

function Home() {

  return (
    <div id="home">
        <div className='relative min-h-screen pt-4 md:pt-16 flex items-center justify-center overflow-hidden' style={{ background: 'linear-gradient(to bottom, #05080eff, #1e1b4b, #191595ff)' }}>
          <div className='container mx-auto px-4 mt-32 z-10' >
            {/* hero section */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
              <div className='flex justify-center'>
                <img src={girlImg} alt='The Silent Voyager' className='w-full max-w-lg h-auto' style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2)' }} />
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
                  <button className='bounce-top w-full md:w-auto bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition shadow-lg'>Buy Now</button>
                  <button className='bounce-bottom w-full md:w-auto border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition ml-0 md:ml-4 shadow-lg'>Read Sample</button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <KeyHighlights />
      <div id="about"><About /></div>
      <div id="author"><Author /></div>
      <div id="toc"><TOC /></div>
      <div id="reviews"><Review /></div>
      <div id="buynow"><BuyNow /></div>
    </div>
  )
}

export default Home