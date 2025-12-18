import bookCover from '../assets/images/mern-outbg.png'
import About from './About'
import Author from './Author'
import TOC from './TOC'
import Review from './Review'
import BuyNow from './BuyNow'
import '../animations.css'
import '../commonCSS/button.css'
import KeyHighlights from './KeyHighlights'
import LightPillar from '../commonCSS/LightPillar';

function Home() {

  return (
    <div id="home">
      <div>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <LightPillar
              topColor="#5227FF"
              bottomColor="#FF9FFC"
              intensity={1.0}
              rotationSpeed={0.3}
              glowAmount={0.005}
              pillarWidth={3.0}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={0}
              interactive={false}
              mixBlendMode="normal"
            />
        <div className='relative min-h-screen pt-4 md:pt-16 flex items-center justify-center overflow-hidden z-10'>
            <div className='container mx-auto px-4 mt-32'>
              {/* hero section */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div className='flex justify-center'>
                  <img
                    src={bookCover}
                    alt='How to Make 1 Crore Book Cover'
                    className='w-full max-w-lg h-auto'
                  />
                </div>
                <div className='text-center md:text-left'>
                  <h1 className='text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg'>
                    <span className='animate-typewriter'>
                      How to Make 1 Crore
                    </span>
                  </h1>
                  <p className='text-white mb-4 drop-shadow-md'>By Author Name</p>
                  <p className='text-gray-200 mb-8 leading-relaxed drop-shadow-md'>
                    Your definitive guide to mastering personal finance and building wealth.
                  </p>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <button
                      className='bounce-top bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-[#1e1b4b] hover:text-white transition shadow-lg'
                      onClick={() => document.getElementById('buynow')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Buy Now
                    </button>
                    <button
                      className='bounce-bottom border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition shadow-lg'
                      onClick={() => document.getElementById('toc')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Read Sample
                    </button>
                  </div>
                </div>
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