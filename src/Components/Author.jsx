import AuthorImg from '../assets/images/author-img.jpg'
import { useEffect, useState } from 'react'
import { FaStar, FaBook, FaPen, FaAward } from 'react-icons/fa'
import '../animations.css'

function Author() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const icons = [FaStar, FaBook, FaPen, FaAward]
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
      size: 12 + Math.random() * 20,
      rotate: Math.random() * 360
    }))
    setParticles(newParticles)
  }, [])

  const blockDetails = [
    { label: 'Books', value: '15' },
    { label: 'Copies Sold', value: '12M+' },
    // { label: 'Awards', value: '25' },
  ]
  return (
    <div className='relative min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden'>
      <style>{`
        @keyframes float3d {
          0%, 100% { transform: translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg); }
          25% { transform: translate3d(20px, -30px, 50px) rotateY(90deg) rotateX(15deg); }
          50% { transform: translate3d(-20px, -60px, 100px) rotateY(180deg) rotateX(30deg); }
          75% { transform: translate3d(30px, -30px, 50px) rotateY(270deg) rotateX(15deg); }
        }
        @keyframes orbit3d {
          0% { transform: rotateY(0deg) translateZ(100px) rotateX(0deg); }
          100% { transform: rotateY(360deg) translateZ(100px) rotateX(360deg); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
        }
        @keyframes imageFloat {
          0%, 100% { transform: translateY(0) rotateZ(0deg) scale(1); }
          50% { transform: translateY(-15px) rotateZ(5deg) scale(1.05); }
        }
        .particle-3d { animation: float3d var(--duration) ease-in-out infinite; transform-style: preserve-3d; }
        .card-3d { animation: cardFloat 3s ease-in-out infinite; transform-style: preserve-3d; }
        .image-3d { animation: imageFloat 4s ease-in-out infinite; transform-style: preserve-3d; }
      `}</style>
      {particles.map(particle => {
        const Icon = particle.Icon
        return (
          <Icon
            key={particle.id}
            className='absolute particle-3d opacity-20'
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              fontSize: `${particle.size}px`,
              '--duration': `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              color: particle.Icon === FaStar ? '#fbbf24' : particle.Icon === FaAward ? '#f59e0b' : '#60a5fa',
              filter: 'drop-shadow(0 0 10px currentColor)'
            }}
          />
        )
      })}
      <div className='container mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>

          {/* image section */}
          <div className='md:col-span-4 flex flex-col items-center mt-16 md:mt-0' style={{ perspective: '1000px' }}>
            <img src={AuthorImg} alt='The Silent Voyager' className='w-64 h-64 border-4 border-blue-800 rounded-full object-cover mb-8 shadow-2xl' style={{ boxShadow: '0 20px 60px rgba(59, 130, 246, 0.5)' }} />

            {/* details blocks */}
            <div className='flex gap-6' style={{ perspective: '1000px' }}>
              {blockDetails.map((item, index) => (
                <div
                  key={index}
                  className='card-3d rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 w-full px-6 py-5 text-center shadow-2xl min-w-[100px] cursor-pointer hover:scale-110 transition-transform duration-300'
                  style={{ 
                    animationDelay: `${index * 0.3}s`,
                    boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4), inset 0 -5px 20px rgba(255,255,255,0.3)'
                  }}
                >
                  <div className='text-3xl font-bold text-white mb-1 drop-shadow-lg'>{item.value}</div>
                  <div className='text-sm text-white font-semibold'>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* content section*/}
          <div className='md:col-span-8 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-semibold text-white mb-4'>Author Name</h1>
            <p className='text-gray-300 mb-8 leading-relaxed pl-2 pr-2 md:pl-0 md:pr-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veritatis, laudantium sapiente doloribus aspernatur sed nihil rem error iste quia, exercitationem, nulla sit illum maxime facere dolorem repellendus qui totam tempora necessitatibus ab sunt omnis atque? Eligendi nostrum sint vero suscipit delectus eveniet quaerat aliquid mollitia. Explicabo error quibusdam blanditiis?</p>
            <p className='text-gray-300 mb-8 leading-relaxed pl-2 pr-2 md:pl-0 md:pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat est optio pariatur molestias quos assumenda, id alias autem, soluta aperiam illum recusandae, ea nam nisi non ducimus incidunt corrupti sequi? Eum nisi nostrum perferendis alias. Ab quod soluta, voluptatem, illum sed vitae error, iusto perspiciatis expedita tenetur voluptate! Culpa.</p>
            <div className='space-y-2 mb-16 md:mb-0'>
              <p className='text-lg text-white mb-2'>Author Email - Email</p>
              <p className='text-lg text-white mb-2'>Other Books - Additional Details</p>
              <p className='text-lg text-white mb-2'>connect with author - Social media app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author