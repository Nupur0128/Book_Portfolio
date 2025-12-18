import AuthorImg from '../assets/images/author-img.jpg'
import { useEffect, useState } from 'react'
import { FaStar, FaBook, FaPen, FaAward } from 'react-icons/fa'
// import '../animations.css'
import '../commonCSS/heading.css'

function Author() {
  // const [particles, setParticles] = useState([])

  // useEffect(() => {
  //   const icons = [FaStar, FaBook, FaPen, FaAward]
  //   const newParticles = Array.from({ length: 40 }, (_, i) => ({
  //     id: i,
  //     Icon: icons[Math.floor(Math.random() * icons.length)],
  //     left: Math.random() * 100,
  //     top: Math.random() * 100,
  //     delay: Math.random() * 5,
  //     duration: 8 + Math.random() * 12,
  //     size: 12 + Math.random() * 20,
  //     rotate: Math.random() * 360
  //   }))
  //   setParticles(newParticles)
  // }, [])

  const blockDetails = [
    { label: 'Books', value: '15' },
    { label: 'Copies Sold', value: '12M+' }
  ]

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(to left, #05080eff, #1e1b4b, #191595ff)' }}>
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 
              0 0 30px #05080eff,
              0 0 60px #1e1b4b,
              0 0 90px #191595ff,
              0 30px 120px #1e1b4b;
          }
          50% {
            box-shadow: 
              0 0 25px #191595ff,
              0 0 60px #1e1b4b,
              0 0 90px #05080eff,
              0 30px 120px #191595ff;
          }
        }
      `}</style>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          {/* Image Section */}
          <div
            className="md:col-span-4 flex flex-col items-center mt-16 md:mt-0"
            style={{ perspective: '1000px' }}
          >
            <img
              src={AuthorImg}
              alt="Author"
              className="w-64 h-64 border-4 border-blue-800 rounded-full object-cover mb-8 shadow-2xl animate-pulse-glow"
              style={{ 
                boxShadow: '0 30px 120px #1e1b4b',
                animation: 'pulseGlow 2s ease-in-out infinite'
              }}
            />

            {/* Details Cards */}
            <div className="flex gap-6" style={{ perspective: '1000px' }}>
              {blockDetails.map((item, index) => (
                <div
                  key={index}
                  className="card-3d rounded-2xl border-2 px-6 py-5 text-center shadow-2xl min-w-[100px] cursor-pointer hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(to bottom, #2920a7ff, #120f6cff)',
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">
                    {item.value}
                  </div>
                  <div className="text-sm text-white font-semibold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-8 text-center md:text-left">
            <h1 className="tracking-in-expand text-4xl md:text-5xl font-semibold text-white mb-4">
              Author Name
            </h1>

            <p className="text-gray-300 mb-8 leading-relaxed px-2 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              veritatis laudantium sapiente doloribus aspernatur sed nihil rem
              error iste quia exercitationem nulla sit illum maxime facere
              dolorem repellendus.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed px-2 md:px-0">
              Tempora repellat est optio pariatur molestias quos assumenda id
              alias autem soluta aperiam illum recusandae ea nam nisi non ducimus
              incidunt corrupti.
            </p>

            <div className="space-y-2 mb-16 md:mb-0">
              <p className="text-lg text-white">Author Email – Email</p>
              <p className="text-lg text-white">Other Books – Details</p>
              <p className="text-lg text-white">
                Connect with Author – Social Media
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Author
